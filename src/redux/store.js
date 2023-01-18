import { configureStore } from '@reduxjs/toolkit';
import avitoApi from './api/avitoApi';

const store = configureStore({
  reducer: {
    [avitoApi.reducerPath]: avitoApi.reducer,
  },

  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(avitoApi.middleware),
});

export default store;
