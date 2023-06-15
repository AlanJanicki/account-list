import React from 'react';

import { Loader } from '../../components';
import { renderWithSnapshot } from '../common';

describe('<Loader/>', () => {
  it('matches snapshot - loading', () => renderWithSnapshot(<Loader isLoading />));
  it('matches snapshot - isError', () =>
    renderWithSnapshot(
      <Loader
        isError
        button={{ onClick: jest.fn(), text: 'Try again' }}
        error='Something went wrong'
        isLoading={false}
      />
    ));
});
