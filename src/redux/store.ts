import { configureStore } from '@reduxjs/toolkit';
import avitoApi from './api/avitoApi';
import getAllTracksReducer from './slices/searchSlice';
import hidePhoneReducer from './slices/hidePhoneSlice';

const store = configureStore({
  reducer: {
    [avitoApi.reducerPath]: avitoApi.reducer,
    items: getAllTracksReducer,
    itemData: hidePhoneReducer,
  },

  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(avitoApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
