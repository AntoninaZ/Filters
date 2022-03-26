import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from './gamesSlice';
import sortingReducer from './sortingOptionSlice';
import filtersReducer from './filtersListSlice';

export const store = configureStore({
  reducer: {
    gameList: gamesReducer,
    sorting: sortingReducer,
    filters: filtersReducer,
  },
});
