import { configureStore } from "@reduxjs/toolkit";

import sortingReducer from "./sortingOptionSlice";
import filtersReducer from "./filtersListSlice";

export const store = configureStore({
  reducer: { sorting: sortingReducer, filterType: filtersReducer },
});
