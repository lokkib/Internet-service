import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemData = {
  tokenIsValid: boolean;
};

const initialState: ItemData = {
  tokenIsValid: false,
};

const checkTokenSlice = createSlice({
  name: 'checkToken',
  initialState,
  reducers: {
    checkToken: (state, action: PayloadAction<boolean>) => {
      state.tokenIsValid = action.payload;
    },
  },
});

export const { checkToken } = checkTokenSlice.actions;

export default checkTokenSlice.reducer;
