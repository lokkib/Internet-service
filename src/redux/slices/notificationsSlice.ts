import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Notifications from '../../@types/slices/Notifications';

const initialState: Notifications = {
  AdDeletionSuccess: false,
  AdPublishedSuccess: false,
  AdEditedSuccess: false,
};

const notoficationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    successDeletionNotify: (state, action: PayloadAction<boolean>) => {
      state.AdDeletionSuccess = action.payload;
    },
    successAdPublicationNotify: (state, action: PayloadAction<boolean>) => {
      state.AdPublishedSuccess = action.payload;
    },
    editingAdSuccessNotify: (state, action: PayloadAction<boolean>) => {
      state.AdEditedSuccess = action.payload;
    },
  },
});

export const { successDeletionNotify, successAdPublicationNotify, editingAdSuccessNotify } =
  notoficationsSlice.actions;

export default notoficationsSlice.reducer;
