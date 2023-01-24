import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ImageId = {
  imageId: string;
};

const initialState: ImageId = {
  imageId: 0,
};

const setActiveImgSlice = createSlice({
  name: 'ID',
  initialState,
  reducers: {
    sendActiveImg: (state, action: PayloadAction<string>) => {
      state.imageId = action.payload.url;
    },
  },
});

export const { sendActiveImg } = setActiveImgSlice.actions;

export default setActiveImgSlice.reducer;
