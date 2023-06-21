import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import React from 'react';

import { restApiRoutes } from '../../app/';
import { AccountList, HEADERS } from '../../features';
import { accounts, accountTypes, httpErrors, responseOKWithPayload, server } from '../../mocks';
import { transformToArrayOfObjectsWithGivenKeys } from '../../utils';
import { matchSnapshot, renderWithStore } from '../common';

type InvalidData = Record<string, unknown>[];

const getCells = async () =>
  (await screen.findAllByTestId('cell')).map(({ textContent }) => textContent);

const getAccountListToDisplay = (accountList: typeof accounts) =>
  accountList.map(({ accountType, currency, name, profitLoss }) => ({
    accountType: accountTypes.find(({ id }) => id === accountType)?.title ?? '',
    name,
    profitLoss: !(`${profitLoss ?? ''}` || undefined) ? '' : `${currency} ${profitLoss}`
  }));

export const getDataToDisplay = (accountList = accounts) =>
  transformToArrayOfObjectsWithGivenKeys({
    data: getAccountListToDisplay(accountList),
    keys: Object.values(HEADERS).map(({ key }) => key),
    valueFallback: '-'
  }).map(({ value }) => value);

const getAccountsWithInvalidData = (
  keys: string[],
  invalidValue?: null | string | number
): InvalidData => [
  {
    ...Object.entries(accounts[0]).reduce((acc, [key, value]) => {
      const changeKey = keys.some((property) => property === key);
      return { ...acc, [key]: changeKey ? invalidValue : value };
    }, {})
  },
  ...accounts.slice(1)
];

const testDisplayingCellsWithInvalidData = async (invalidData: InvalidData) => {
  mockServerResponse(invalidData);
  const { asFragment } = renderWithStore(<AccountList />);
  expect(await getCells()).toEqual(getDataToDisplay(invalidData as typeof accounts));
  matchSnapshot(asFragment());
};

const mockServerResponse = (payload: InvalidData) =>
  server.use(
    rest.get(restApiRoutes.accounts, (...args) => responseOKWithPayload(...args, payload))
  );

describe('<AccountList/> - layout', () => {
  it('displays spinner during api call', async () => {
    const { asFragment } = renderWithStore(<AccountList />);
    matchSnapshot(asFragment());
    await screen.findByRole('status');
  });

  it('hides spinner on api call finish', async () => {
    const { asFragment } = renderWithStore(<AccountList />);
    await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());
    matchSnapshot(asFragment());
  });

  it('displays card header', async () => {
    renderWithStore(<AccountList />);
    await screen.findByRole('heading', { name: 'Account list' });
  });

  it('displays headers', async () => {
    renderWithStore(<AccountList />);
    const headers = (await screen.findAllByTestId('header')).map(({ textContent }) => textContent);
    expect(Object.values(HEADERS).map(({ value }) => value)).toEqual(headers);
  });

  it('displays cells with valid data', async () => {
    renderWithStore(<AccountList />);
    expect(await getCells()).toEqual(getDataToDisplay());
  });

  it(`displays "No accounts to display" when accountList is empty`, async () => {
    mockServerResponse([]);
    const { asFragment } = renderWithStore(<AccountList />);
    expect(await screen.findByText('No accounts to display')).toBeInTheDocument();
    matchSnapshot(asFragment());
  });

  it.each(
    [undefined, null, ''].map((value) => ({
      name: typeof value === 'string' ? 'empty' : value,
      value
    }))
  )(`displays fallback '-' when account has $name values`, async ({ value }) => {
    await testDisplayingCellsWithInvalidData(
      getAccountsWithInvalidData(
        Object.values(HEADERS).map(({ key }) => key),
        value
      )
    );
  });

  it(`displays fallback '-' when profitLoss is 0`, async () => {
    await testDisplayingCellsWithInvalidData(getAccountsWithInvalidData(['profitLoss'], 0));
  });
});

describe('<AccountList/> - server error', () => {
  beforeEach(() => server.use(httpErrors.accounts));

  const getRetryButton = async () => await screen.findByRole('button', { name: 'Try again' });

  it('displays error message on accountList fetch failure', async () => {
    const { asFragment } = renderWithStore(<AccountList />);
    await screen.findByText('Something went wrong fetching account list');
    matchSnapshot(asFragment());
  });

  it('displays refetch button on accountList fetch failure', async () => {
    renderWithStore(<AccountList />);
    await getRetryButton();
  });

  it('displays spinner during refetch api call', async () => {
    const { asFragment } = renderWithStore(<AccountList />);
    userEvent.click(await getRetryButton());
    matchSnapshot(asFragment());
    await screen.findByRole('status');
  });

  it('hides spinner on refetch api call finish', async () => {
    renderWithStore(<AccountList />);
    userEvent.click(await getRetryButton());
    await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());
  });
});
