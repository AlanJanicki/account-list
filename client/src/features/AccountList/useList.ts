import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useGetAccountListWithTypeVerboseQuery } from '../../app/';
import { Cell } from '../../components';
import { Account } from '../../models';
import { transformToArrayOfObjectsWithGivenKeys } from '../../utils';

export const useList = (headers: Cell[]) => {
  const { data, isError, isFetching, refetch } = useGetAccountListWithTypeVerboseQuery();

  const cells = useMemo(() => getCells(data ?? []), [data]);

  function getCells(data: Account[]) {
    const headerCells = headers.map(({ value }) => ({ isHeader: true, key: uuidv4(), value }));
    const cells = transformToArrayOfObjectsWithGivenKeys({
      data,
      formatValue: (key, getValue) =>
        `${
          key === 'profitLoss' && getValue('profitLoss') !== '-' ? getValue('currency') : ''
        } ${getValue(key)}`.trim(),
      keys: headers.map(({ key }) => key),
      valueFallback: '-'
    });

    return [...headerCells, ...cells];
  }

  return {
    cells,
    isError,
    isFetching,
    refetch
  };
};
