import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemData = {
  ItemData: string;
};

const initialState: ItemData = {
  ItemData: '',
};

export const hidePhoneSlice = createSlice({
  name: 'hiddenPhone',
  initialState,
  reducers: {
    getPhone: (state, action: PayloadAction<string>) => {
      // const hiddenNumber =  phoneNumber.replace(phoneNumber.slice(4), 'XXX XX XX')
      state.ItemData = action.payload.replace(action.payload.slice(4), 'XXX XX XX');
    },
  },
});

export const { getPhone } = hidePhoneSlice.actions;

export default hidePhoneSlice.reducer;
