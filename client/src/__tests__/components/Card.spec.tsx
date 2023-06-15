import React from 'react';

import { Card } from '../../components';
import { renderWithSnapshot } from '../common';

describe('<Card/>', () => {
  it('matches snapshot', () => renderWithSnapshot(<Card header='Account list' />));
});
