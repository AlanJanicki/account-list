import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { setupStore } from '../app/';

export const matchSnapshot = (fragment: DocumentFragment) => expect(fragment).toMatchSnapshot();

export const renderWithSnapshot = (ui: ReactElement) =>
  expect(render(ui).asFragment()).toMatchSnapshot();

export const renderWithStore = (ui: ReactElement) =>
  render(<Provider store={setupStore()}>{ui}</Provider>);
