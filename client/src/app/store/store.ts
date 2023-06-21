import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from '../services/api';

export const setupStore = () => {
  const store = configureStore({
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware],
    reducer: {
      [api.reducerPath]: api.reducer
    }
  });

  setupListeners(store.dispatch);
  return store;
};
