import { createSlice } from '@reduxjs/toolkit';

import { getSortingOptions } from '../services/api/games.api';

const initialState = {
  sortingList: [],
  activeSortingOption: 'default',
};

export const sortingOptionSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortingOption: (state, action) => {
      state.sortingList = action.payload;
    },
    setActiveSortingOption: (state, action) => {
      state.activeSortingOption = action.payload;
    },
  },
});

export const fetchSortingOption = () => async (dispatch) => {
  const sortingList = await Promise.resolve(getSortingOptions());
  dispatch(setSortingOption(sortingList));
};

export const { setActiveSortingOption, setSortingOption } =
  sortingOptionSlice.actions;

export default sortingOptionSlice.reducer;
