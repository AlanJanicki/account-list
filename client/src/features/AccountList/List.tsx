import React from 'react';

import { Card, Loader, Table } from '../../components';
import * as Styled from './styles/List.styled';
import { useList } from './useList';

export const HEADERS = [
  { key: 'name', value: 'Name' },
  { key: 'profitLoss', value: 'Profit & Loss' },
  { key: 'accountType', value: 'Account Type' }
];

export const List = () => {
  const { cells, isError, isLoading, refetch: onClick } = useList(HEADERS);

  return (
    <Styled.Wrapper>
      <Loader
        button={{ onClick, text: 'Try again' }}
        error='Something went wrong fetching account list'
        isError={isError}
        isLoading={isLoading}
      >
        <Card header='Account list'>
          {cells.length > HEADERS.length ? (
            <Table cells={cells} />
          ) : (
            <Styled.EmptyList>No accounts to display</Styled.EmptyList>
          )}
        </Card>
      </Loader>
    </Styled.Wrapper>
  );
};
