import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';
import CurrentUserData from '../../@types/CurrentUserData';

const avitoApi = createApi({
  reducerPath: 'avitoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  endpoints: (build) => ({
    signup: build.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    refreshToken: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'PUT',
        body,
      }),
    }),
    fetchItems: build.query({
      query: (number) => `/ads?page=${number}`,
    }),
    fetchAllItems: build.query({
      query: () => `/ads`,
    }),
    goToConcreteItem: build.query({
      query: (id) => `/ads/${id}`,
    }),
    getCurrentUserData: build.query<CurrentUserData, void>({
      query: () => ({
        url: `/user`,
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
    }),
    changeCurrentUserData: build.mutation({
      query: (body) => ({
        url: `/user`,
        body,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
    }),
    getItemsOfSeller: build.query({
      query: (id) => `/ads?user_id=${id}`,
    }),
    getItemComments: build.query({
      query: (item) => `/ads/${item}/comments`,
    }),
  }),
});

export default avitoApi;

export const {
  useLoginMutation,
  useSignupMutation,
  useFetchItemsQuery,
  useFetchAllItemsQuery,
  useGoToConcreteItemQuery,
  useGetCurrentUserDataQuery,
  useRefreshTokenMutation,
  useChangeCurrentUserDataMutation,
  useGetItemsOfSellerQuery,
  useGetItemCommentsQuery,
} = avitoApi;
