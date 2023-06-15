import '@testing-library/jest-dom';
import 'jest-styled-components';

import { api, setupStore } from './app/';
import { server } from './mocks';

beforeAll(() => server.listen());

beforeEach(() => {
  setupStore().dispatch(api.util.resetApiState());
  server.resetHandlers();
});

afterAll(() => server.close());
