import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import AdEditWithImages from '../../@types/slices/AdEditWithImages';

const initialState: AdEditWithImages = {
  editingWithImg: false,
  ImgArray: [],
  newArrayAfterDeletion: [],
};

export const editingAdSlice = createSlice({
  name: 'editedAd',
  initialState,
  reducers: {
    passInfoOnEditingAd: (state, action: PayloadAction<boolean>) => {
      state.editingWithImg = action.payload;
    },

    reset: () => initialState,
    passImg: (state, action: PayloadAction<string>) => {
      state.ImgArray.push(action.payload);
    },

    deleteImg: (state, action: PayloadAction<string>) => {
      state.ImgArray = state.ImgArray.filter((el) => {
        return el !== action.payload;
      });
    },
  },
});

export const { passInfoOnEditingAd, passImg, deleteImg, reset } = editingAdSlice.actions;

export default editingAdSlice.reducer;
