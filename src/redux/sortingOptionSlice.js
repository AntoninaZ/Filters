import { createSlice } from '@reduxjs/toolkit';

import { getSortingOptions } from '../services/api/games.api';

const initialState = {
  sortingOptionsList: [],
  activeSortingOption: 'default',
};

export const sortingOptionSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortingOption: (state, action) => {
      state.sortingOptionsList = action.payload;
    },
    setActiveSortingOption: (state, action) => {
      state.activeSortingOption = action.payload;
    },
  },
});

export const fetchSortingOption = () => async (dispatch) => {
  const sortingOptionsList = await Promise.resolve(getSortingOptions());
  dispatch(setSortingOption(sortingOptionsList));
};

export const { setActiveSortingOption, setSortingOption } =
  sortingOptionSlice.actions;

export default sortingOptionSlice.reducer;
