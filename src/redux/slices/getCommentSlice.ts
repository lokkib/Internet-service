import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Comment from '../../@types/slices/Comment';

const initialState: Comment = {
  text: '',
};

export const getCommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { getComment } = getCommentSlice.actions;

export default getCommentSlice.reducer;
