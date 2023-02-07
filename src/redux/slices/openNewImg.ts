import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ImgLink } from '../../@types/props/ImageLinksProps';
import SelectedImageId from '../../@types/slices/SelectedImageId';

const initialState: SelectedImageId = {
  imageId: '',
};

const setActiveImgSlice = createSlice({
  name: 'ID',
  initialState,
  reducers: {
    sendActiveImg: (state, action: PayloadAction<ImgLink | string>) => {
      if (typeof action.payload !== 'string') {
        state.imageId = action.payload.url;
      }
    },
  },
});

export const { sendActiveImg } = setActiveImgSlice.actions;

export default setActiveImgSlice.reducer;
