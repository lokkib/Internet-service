import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type AdDetails = {
  title: string;
  description: string;
  price: number;
};

const initialState: AdDetails = {
  title: '',
  description: '',
  price: 0,
};

const currentUsersAdDetailsSlice = createSlice({
  name: 'CurrentUsersAdDetails',
  initialState,
  reducers: {
    passAdTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    passAdDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    passAdPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { passItemTitle, passItemDescription, passItemPrice } =
  currentUsersAdDetailsSlice.actions;

export default currentUsersAdDetailsSlice.reducer;
