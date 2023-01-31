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

type IdFrDeleting = {
  id: string;
};


const avitoApi = createApi({
  reducerPath: 'avitoApi',
  tagTypes: ['Comments', 'Ads', 'UserSettings', 'Images'],
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
    fetchAllItems: build.query<Items[], void>({
      query: () => `/ads`,
    }),
    goToConcreteItem: build.query({
      query: (id) => `/ads/${id}`,
      providesTags: ['Ads'],
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
    publishNewAdWithImg: build.mutation({
      query: (body) => {
        const { data, formdata } = body;
        return {
          url: `/ads`,
          formdata,
          params: data,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${getCookie('access')}`,
          },
        };
      },
      invalidatesTags: ['Ads'],
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
      invalidatesTags: ['Ads'],
    }),
    getCurrentUserAds: build.query<Items[], void>({
      query: () => ({
        url: `/ads/me`,
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      providesTags: ['Ads'],
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
    deleteAd: build.mutation<string, IdFrDeleting>({
      query: (body) => ({
        url: `/ads/${body.id}`,
        method: 'DELETE',
        body,
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      invalidatesTags: ['Ads'],
    }),
    editAd: build.mutation({
      query: (body) => ({
        url: `/ads/${body.id}`,
        method: 'PATCH',
        body,
        headers: {
          Authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      invalidatesTags: ['Ads'],
    }),
    addImageToAd: build.mutation({
      query: (body) => {
        return {
          url: `/ads/${getCookie('id')}/image`,
          method: 'POST',
          body,
          headers: {
            Authorization: `Bearer ${getCookie('access')}`,
          },
        };
      },
      invalidatesTags: ['Ads'],
    }),
    loadAvatar: build.mutation({
      query: (body) => ({
        url: `/user/avatar`,
        method: 'POST',
        body,
        headers: {
          authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      invalidatesTags: ['UserSettings'],
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
  useDeleteAdMutation,
  useEditAdMutation,
  useLoadAvatarMutation,
  useAddImageToAdMutation,
  usePublishNewAdWithImgMutation,
} = avitoApi;
