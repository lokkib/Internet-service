import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ItemData = {
  userData: {
    role: 'string';
    email: 'user@example.com';
    name: 'string';
    surname: 'string';
    phone: 'string';
    city: 'string';
  };
};

const initialState: ItemData = {
  userData: {
    role: 'string',
    email: 'user@example.com',
    name: 'string',
    surname: 'string',
    phone: 'string',
    city: 'string',
  },
};

const detectUserChangeSlice = createSlice({
  name: 'checkToken',
  initialState,
  reducers: {
    detectUserDataChange: (state, action: PayloadAction<ItemData>) => {
      state.userData = action.payload;
    },
  },
});

export const { detectUserDataChange } = detectUserChangeSlice.actions;

export default detectUserChangeSlice.reducer;
