import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const avitoApi = createApi({
  reducerPath: 'avitoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  endpoints: (build) => ({
    signup: build.mutation({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    fetchItems: build.query({
      query: (number) => `/ads?page=${number}`,
    }),
  }),
});

export default avitoApi;

export const { useLoginMutation, useSignupMutation, useFetchItemsQuery } = avitoApi;
