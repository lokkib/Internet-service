import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ImgLink } from '../../@types/ImageLinksProps';

type ImageId = {
  imageId: string;
};

const initialState: ImageId = {
  imageId: '',
};

const setActiveImgSlice = createSlice({
  name: 'ID',
  initialState,
  reducers: {
    sendActiveImg: (state, action: PayloadAction<ImgLink>) => {
      state.imageId = action.payload.url;
    },
  },
});

export const { sendActiveImg } = setActiveImgSlice.actions;

export default setActiveImgSlice.reducer;
