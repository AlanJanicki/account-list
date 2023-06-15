import React from 'react';

import { Spinner } from '../../components';
import { renderWithSnapshot } from '../common';

describe('<Spinner/>', () => {
  it('matches snapshot', () => renderWithSnapshot(<Spinner />));
});
