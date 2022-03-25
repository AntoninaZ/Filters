import games from "../mocks/games.json";

export const getGamesListClassification = (activeFilters) => {
  const filters = Object.keys(activeFilters).filter(
    (key) => activeFilters[key]
  );

  if (!filters.length) return games;

  const filteredGames = games.filter((element) =>
    filters.includes(element.storeDisplayClassification)
  );

  return filteredGames;
};
