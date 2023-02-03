import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemData = {
  editingWithImg: boolean;
  publishingWithImg: boolean;
  ImgArray: string[];
  ImgArray2: string[];
  newArrayAfterDeletion: string[]
};

const initialState: ItemData = {
  editingWithImg: false,
  publishingWithImg: false,
  ImgArray: [],
  ImgArray2: [],
  newArrayAfterDeletion: []
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
    passImg2: (state, action: PayloadAction<string>) => {
      state.ImgArray2.push(action.payload);
    },
    deleteImg: (state, action: PayloadAction<string>) => {
     
      state.ImgArray = state.ImgArray.filter((el) => {
        return el !== action.payload
      })
    },
    deleteImg2: (state, action: PayloadAction<string>) => {
     
      state.ImgArray2 = state.ImgArray2.filter((el) => {
        return el !== action.payload
      })
    },

  },
});

export const { passInfoOnEditingAd, passImg, passInfoOnPublishingWithImg, deleteImg, passImg2, deleteImg2 } = editingAdSlice.actions;

export default editingAdSlice.reducer;
