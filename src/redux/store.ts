import { configureStore } from '@reduxjs/toolkit';
import avitoApi from './api/avitoApi';
import getAllTracksReducer from './slices/searchSlice';
import setActiveImgReducer from './slices/openNewImg';
import checkModalsStateReducer from './slices/checkModalsSlice';
import passNewAdvReducer from './slices/passNewAdParamsTextOnly';
import getComentReducer from './slices/getCommentSlice';
import detectUserChangeReducer from './slices/detectUserDataChangeSlice';
import notificationsReducer from './slices/notificationsSlice';
import editingAdWithImgSlice from './slices/editingAdWithImgSlice';

const store = configureStore({
  reducer: {
    [avitoApi.reducerPath]: avitoApi.reducer,
    items: getAllTracksReducer,
    activeImg: setActiveImgReducer,
    modalsState: checkModalsStateReducer,
    newAdParamsTextOnly: passNewAdvReducer,
    comment: getComentReducer,
    currentUserData: detectUserChangeReducer,
    notifications: notificationsReducer,
    editedAd: editingAdWithImgSlice,
  },

  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(avitoApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
