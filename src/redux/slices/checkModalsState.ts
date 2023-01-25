import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  reviews: boolean;
  signIn: boolean;
  signup: boolean;
};

const initialState: ModalState = {
  reviews: false,
  signIn: false,
  signup: false,
};

export const checkModalsStateSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    getReviewsState: (state, action: PayloadAction<boolean>) => {
      state.reviews = action.payload;
    },
    getSignInState: (state, action: PayloadAction<boolean>) => {
      state.reviews = action.payload;
    },
    getSignUpState: (state, action: PayloadAction<boolean>) => {
      state.reviews = action.payload;
    },
  },
});

export const { getReviewsState, getSignInState, getSignUpState } = checkModalsStateSlice.actions;

export default checkModalsStateSlice.reducer;
