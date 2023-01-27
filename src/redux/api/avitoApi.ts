import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';
import CurrentUserData from '../../@types/CurrentUserData';
import { Items } from '../../@types/ContentCardsProps';
import { CurrentUserDataMain } from '../slices/detectUserDataChangeSlice';

type Comment = {
  id: number;
  text: string;
  created_on: string;
  author: {
    id: number;
    name: string;
    email: string;
    city: string;
    avatar: string;
    sells_from: string;
    phone: string;
  };
};



export type Comment3 = {
  id: number;
  text: string;
};

const avitoApi = createApi({
  reducerPath: 'avitoApi',
  tagTypes: ['Comments', 'Ads', 'UserSettings'],
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
    fetchItems: build.query<Items[], number>({
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
      providesTags: ['UserSettings'],
    }),
    changeCurrentUserData: build.mutation<CurrentUserData, CurrentUserDataMain>({
      query: (body) => ({
        url: `/user`,
        body,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      invalidatesTags: ['UserSettings'],
    }),
    getItemsOfSeller: build.query({
      query: (id) => `/ads?user_id=${id}`,
    }),
    getItemComments: build.query({
      query: (item) => `/ads/${item}/comments`,
      providesTags: ['Comments'],
    }),
    publishNewAdv: build.mutation({
      query: (body) => ({
        url: `/adstext`,
        body,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
    }),
    getCurrentUserAds: build.query<Items, void>({
      query: () => ({
        url: `/ads/me`,
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
    }),
    createCommenttoTheAd: build.mutation<Comment, Comment3>({
      query: (body) => ({
        url: `/ads/${body.id as number}/comments`,
        body,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      invalidatesTags: ['Comments'],
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
  usePublishNewAdvMutation,
  useGetCurrentUserAdsQuery,
  useCreateCommenttoTheAdMutation,
} = avitoApi;
