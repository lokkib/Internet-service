import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ImageId = {
  AdDeletionSuccess: boolean;
  AdPublished: boolean;
  AdEdited: boolean;
};

const initialState: ImageId = {
  AdDeletionSuccess: false,
  AdPublished: false,
  AdEdited: false,
};

const notoficationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    successDeletionNotify: (state, action: PayloadAction<boolean>) => {
      state.AdDeletionSuccess = action.payload;
    },
    successAdPublicationNotify: (state, action: PayloadAction<boolean>) => {
      state.AdPublished = action.payload;
    },
    editingAdSuccessNotify: (state, action: PayloadAction<boolean>) => {
      state.AdEdited = action.payload;
    },
  },
});

export const { successDeletionNotify, successAdPublicationNotify, editingAdSuccessNotify } =
  notoficationsSlice.actions;

export default notoficationsSlice.reducer;
