import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemData = {
  editingWithImg: boolean;
  publishingWithImg: boolean;
  ImgArray: string[];
};

const initialState: ItemData = {
  editingWithImg: false,
  publishingWithImg: false,
  ImgArray: [],
};

export const editingAdSlice = createSlice({
  name: 'editedAd',
  initialState,
  reducers: {
    passInfoOnEditingAd: (state, action: PayloadAction<boolean>) => {
      state.editingWithImg = action.payload;
    },
    passInfoOnPublishingWithImg: (state, action: PayloadAction<boolean>) => {
      state.publishingWithImg = action.payload;
    },
    passImg: (state, action: PayloadAction<string>) => {
      state.ImgArray.push(action.payload);
    },
  },
});

export const { passInfoOnEditingAd, passImg, passInfoOnPublishingWithImg } = editingAdSlice.actions;

export default editingAdSlice.reducer;
