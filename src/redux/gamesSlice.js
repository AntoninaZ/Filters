import { createSlice } from '@reduxjs/toolkit';
import { getGamesListClassification } from '../services/api/games.api';

const initialState = {
  games: [],
};

export const gamesSlice = createSlice({
  name: 'gameList',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

export const fetchGames =
  ({ activeFilters, activeSortingOption }) =>
  async (dispatch) => {
    const games = await Promise.resolve(
      getGamesListClassification(activeFilters, activeSortingOption)
    );

    dispatch(setGames(games));
  };

export const { setGames } = gamesSlice.actions;

export default gamesSlice.reducer;
