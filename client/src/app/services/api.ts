import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl } from './routes';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-apikey', process.env.REACT_APP_API_KEY ?? '');
      return headers;
    }
  }),
  endpoints: () => ({})
});
