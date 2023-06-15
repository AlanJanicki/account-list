import './index.css';

import React from 'react';
import { Provider } from 'react-redux';

import { setupStore } from './app/';
import { AccountList } from './features';

const App = () => (
  <Provider store={setupStore()}>
    <AccountList />
  </Provider>
);

export default App;
