import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import AdNewParams from '../../@types/slices/AdNewParams';

const initialState: AdNewParams = {
  title: '',
  description: '',
  price: 0,
  images: [],
};

const newAdvParamsSlice = createSlice({
  name: 'newAdParamsTextOnly',
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
    passItemImages: (state, action: PayloadAction<string[]>) => {
      state.images = action.payload;
    },
    deleteItemImages: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((el) => {
        return el !== action.payload;
      });
    },
  },
});

export const {
  passItemTitle,
  passItemDescription,
  passItemPrice,
  passItemImages,
  deleteItemImages,
} = newAdvParamsSlice.actions;

export default newAdvParamsSlice.reducer;
