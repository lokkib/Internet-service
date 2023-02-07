import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';
import CurrentUserData from '../../@types/props/CurrentUserDataProps';
import { Items } from '../../@types/props/ContentCardsProps';
import CurrentUserDataMain from '../../@types/slices/CurrentUserData';
import api from '../../constants/api';
import CommentResponse, { CommentText } from '../../@types/api/Comments';

const avitoApi = createApi({
  reducerPath: 'avitoApi',
  tagTypes: ['Comments', 'Ads', 'UserSettings', 'Images'],
  baseQuery: fetchBaseQuery({ baseUrl: api }),
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
      query: ({ formData, data }) => {
        return {
          url: `/ads`,
          params: data,
          body: formData,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${getCookie('access')}`,
          },
        };
      },
      invalidatesTags: ['Ads'],
    }),
    publishNewAdTextOnly: build.mutation({
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
    createCommenttoTheAd: build.mutation<CommentResponse, CommentText>({
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
    deleteAd: build.mutation<string, string>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'DELETE',
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
    deleteImageFromAd: build.mutation({
      query: (params) => ({
        url: `/ads/${params.pk}/image`,
        method: 'DELETE',
        params,
        headers: {
          authorization: `Bearer ${getCookie('access')}`,
        },
      }),
      invalidatesTags: ['Ads'],
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
  usePublishNewAdTextOnlyMutation,
  useGetCurrentUserAdsQuery,
  useCreateCommenttoTheAdMutation,
  useDeleteAdMutation,
  useEditAdMutation,
  useLoadAvatarMutation,
  useAddImageToAdMutation,
  usePublishNewAdWithImgMutation,
  useDeleteImageFromAdMutation,
} = avitoApi;
