import { createSlice } from '@reduxjs/toolkit';

import sortingOptions from '../services/mocks/sorting.json';

const initialState = {
  activeSortingOption: 0,
  sortingOptionsList: sortingOptions,
};

export const sortingOptionSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortingOption: (state, action) => {
      state.activeSortingOption = action.payload;
    },
  },
});

export const { setSortingOption } = sortingOptionSlice.actions;

export default sortingOptionSlice.reducer;
