import React from 'react';

import { Table } from '../../components';
import { getCellsWithMockedData } from '../../mocks';
import { renderWithSnapshot } from '../common';

describe('<Table/>', () => {
  it('matches snapshot', () => renderWithSnapshot(<Table cells={getCellsWithMockedData()} />));
});
