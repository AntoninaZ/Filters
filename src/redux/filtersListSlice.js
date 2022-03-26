import { createSlice } from '@reduxjs/toolkit';

import { getFiltersList } from '../services/api/games.api';

const initialState = {
  filtersList: [],
  activeFilters: {},
};

export const filtersListSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFiltersList: (state, action) => {
      state.filtersList = action.payload;
    },
    setActiveFiters: (state, action) => {
      state.activeFilters = {
        ...state.activeFilters,
        [action.payload]: !state.activeFilters[action.payload],
      };
    },
    resetActiveFiters: (state) => {
      state.activeFilters = {};
    },
  },
});

export const fetchFilters = () => async (dispatch) => {
  const filtersList = await Promise.resolve(getFiltersList());
  dispatch(setFiltersList(filtersList));
};

export const { setFiltersList, setActiveFiters, resetActiveFiters } =
  filtersListSlice.actions;

export default filtersListSlice.reducer;
