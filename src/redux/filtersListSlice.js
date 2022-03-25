import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilters: {},
};

export const filtersListSlice = createSlice({
  name: 'filterType',
  initialState,
  reducers: {
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

export const { setActiveFiters, resetActiveFiters } = filtersListSlice.actions;

export default filtersListSlice.reducer;
