import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Items } from '../../@types/ContentCardsProps';

type SearchState = {
  allItems: Items[];
  inputValue: string;
  filteredItems: Items[];
  notFound: boolean;
};

const initialState: SearchState = {
  allItems: [],
  inputValue: '',
  filteredItems: [],
  notFound: false,
};

export const searchSlice = createSlice({
  name: 'filteredItems',
  initialState,
  reducers: {
    getAllItems: (state, action: PayloadAction<Items[]>) => {
      state.allItems = action.payload;
    },
    getInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    filteringItems: (state, action: PayloadAction<string>) => {
      state.filteredItems = state.allItems.filter((item) =>
        item.title.toLocaleLowerCase().startsWith(action.payload.toLocaleLowerCase())
      );

      if(action.payload === '') {
        state.filteredItems = []
      }
    },
    searchResultEmptyRenderAllItems: (state, action: PayloadAction<boolean>) => {
      state.notFound = action.payload;
    },
  },
});

export const { getAllItems, getInputValue, filteringItems, searchResultEmptyRenderAllItems } =
  searchSlice.actions;

export default searchSlice.reducer;
