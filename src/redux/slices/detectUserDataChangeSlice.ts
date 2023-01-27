import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export type CurrentUserDataMain = {
  name: string;
  surname: string;
  phone: string;
  city: string;
}


type currentUserDataState = {
  currentUserData: {
    name: string;
    surname: string;
    phone: string;
    city: string;
    avatar?: string
  },
  newCurrentUserData: {
    name: string;
    surname: string;
    phone: string;
    city: string;
  },
  isDataChanged: {
    DataChanged: boolean
  }
};


const initialState: currentUserDataState = {
  currentUserData: {
    name: '',
    surname: '',
    phone: '',
    city: '',
    avatar: ''
  },
  newCurrentUserData: {
    name: '',
    surname: '',
    phone: '',
    city: '',
  },
  isDataChanged: {
    DataChanged: false
  }
};

const detectUserChangeSlice = createSlice({
  name: 'currentUserData',
  initialState,
  reducers: {
    getCurrentUserData: (state, action: PayloadAction<CurrentUserDataMain>) => {
      state.currentUserData = action.payload;
    },
    getNewCurrentUserName: (state, action: PayloadAction<string>) => {
      state.newCurrentUserData.name = action.payload;
    },
    getNewCurrentUserSurName: (state, action: PayloadAction<string>) => {
      state.newCurrentUserData.surname = action.payload;
    },
    getNewCurrentUserPhone: (state, action: PayloadAction<string>) => {
      state.newCurrentUserData.phone = action.payload;
    },
    getNewCurrentUserCity: (state, action: PayloadAction<string>) => {
      state.newCurrentUserData.city = action.payload;
    },
    checkisDataChanged: (state, action: PayloadAction<boolean>) => {
      state.isDataChanged.DataChanged = action.payload
  }
  },
  
});

export const { getCurrentUserData, getNewCurrentUserName, getNewCurrentUserSurName, getNewCurrentUserPhone, getNewCurrentUserCity,  checkisDataChanged} = detectUserChangeSlice.actions;

export default detectUserChangeSlice.reducer;
