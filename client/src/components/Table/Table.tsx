import React from 'react';

import * as Styled from './styles/Table.styled';

export type Cell = {
  isHeader?: boolean;
  key: string;
  value: string;
};

type Props = {
  cells: Cell[];
};

export const Table = ({ cells }: Props) => (
  <Styled.Table colsNumber={cells.filter(({ isHeader }) => isHeader).length}>
    {cells.map(({ isHeader, key, value }) => (
      <span key={key} data-testid={isHeader ? 'header' : 'cell'}>
        {isHeader ? <strong>{value}</strong> : value}
      </span>
    ))}
  </Styled.Table>
);
