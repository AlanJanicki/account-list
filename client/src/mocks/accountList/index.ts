import { v4 as uuidv4 } from 'uuid';

import { HEADERS } from '../../features';
import { transformToArrayOfObjectsWithGivenKeys } from '../../utils';
import accounts from './accounts.json';

export const getCellsWithMockedData = () => {
  const headers = Object.values(HEADERS).map(({ key }) => key);

  return [
    ...headers.map((value) => ({ isHeader: true, key: uuidv4(), value })),
    ...transformToArrayOfObjectsWithGivenKeys({
      data: accounts.slice(0, 3),
      keys: headers,
      valueFallback: '-'
    })
  ];
};
