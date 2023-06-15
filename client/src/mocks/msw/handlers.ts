import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';

import { restApiRoutes } from '../../app/';
import { default as accountsMock } from '../accountList/accounts.json';
import { default as accountTypesMock } from '../accountList/accounttypes.json';

const { accountTypes, accounts } = restApiRoutes;

export const httpErrors = {
  accounts: rest.get(accounts, (_, res, ctx) => res(ctx.status(500)))
};

export const responseOKWithPayload = (
  _: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
  payload: Record<string, unknown>[]
) => res(ctx.status(200), ctx.json(payload));

export const handlers = [
  rest.get(accounts, (...args) => responseOKWithPayload(...args, accountsMock)),
  rest.get(accountTypes, (...args) => responseOKWithPayload(...args, accountTypesMock))
];
