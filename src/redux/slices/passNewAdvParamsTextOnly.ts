import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// type images = {
// 	id: number,
// 		ad_id: number,
// 		url: string
// }

type NewAdvParams = {
  title: string;
  description: string;
  price: number;
};

const initialState: NewAdvParams = {
  title: '',
  description: '',
  price: 0,
};

const newAdvParamsSlice = createSlice({
  name: 'newAdvParamsTextOnly',
  initialState,
  reducers: {
    passItemTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    passItemDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    passItemPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { passItemTitle, passItemDescription, passItemPrice } = newAdvParamsSlice.actions;

export default newAdvParamsSlice.reducer;
