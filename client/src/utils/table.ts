import { v4 as uuidv4 } from 'uuid';

import { Cell } from '../components';

export const transformToArrayOfObjectsWithGivenKeys = ({
  data,
  formatValue,
  keys,
  valueFallback
}: {
  data: Record<string, unknown>[];
  formatValue?: (key: string, getValue: (key: string) => string) => string;
  keys: string[];
  valueFallback?: string;
}) =>
  data.reduce((acc, next) => {
    const rowCells = keys.reduce((acc, nextProperty) => {
      const getValue = (key: string) => {
        const value = next[key];
        if (!valueFallback) return `${value}`;
        return `${value ?? ''}` || valueFallback;
      };

      return [
        ...acc,
        {
          key: uuidv4(),
          value: formatValue?.(nextProperty, getValue) ?? getValue(nextProperty)
        }
      ];
    }, [] as Cell[]);

    return [...acc, ...rowCells];
  }, [] as Cell[]);
