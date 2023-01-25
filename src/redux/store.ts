import { configureStore } from '@reduxjs/toolkit';
import avitoApi from './api/avitoApi';
import getAllTracksReducer from './slices/searchSlice';
import hidePhoneReducer from './slices/hidePhoneSlice';
import checkTokenReducer from './slices/checkTokenSlice';
import setActiveImgReducer from './slices/openNewImg';
import checkModalsStateReducer from './slices/checkModalsState';

const store = configureStore({
  reducer: {
    [avitoApi.reducerPath]: avitoApi.reducer,
    items: getAllTracksReducer,
    itemData: hidePhoneReducer,
    isTokenValid: checkTokenReducer,
    activeImg: setActiveImgReducer,
    modalsState: checkModalsStateReducer,
  },

  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(avitoApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
