import games from '../mocks/games.json';
import filters from '../mocks/filters.json';
import sortingOptions from '../mocks/sorting.json';

import moment from 'moment';

const sortedList = (sortQuery) => {
  let priceRegex = /[^\d.-]/g;
  switch (sortQuery) {
    case 'downloads': {
      return [...games].sort(
        (firstGame, secondGame) =>
          Number(secondGame.downloadsCount) - Number(firstGame.downloadsCount)
      );
    }
    case 'productNameAscending': {
      return [...games].sort((firstGame, secondGame) =>
        firstGame.name.localeCompare(secondGame.name)
      );
    }
    case 'productNameDescending': {
      return [...games].sort((firstGame, secondGame) =>
        secondGame.name.localeCompare(firstGame.name)
      );
    }
    case 'productReleaseDateAscending': {
      return [...games].sort((firstGame, secondGame) =>
        moment(firstGame.releaseDate, 'DD-MM-YYYY').diff(
          moment(secondGame.releaseDate, 'DD-MM-YYYY')
        )
      );
    }
    case 'productReleaseDateDescending': {
      return [...games].sort((firstGame, secondGame) =>
        moment(secondGame.releaseDate, 'DD-MM-YYYY').diff(
          moment(firstGame.releaseDate, 'DD-MM-YYYY')
        )
      );
    }
    case 'webBasePriceAscending': {
      return [...games].sort((firstGame, secondGame) => {
        const firstPrice = firstGame.price.basePrice.replace(priceRegex, ''),
          secondPrice = secondGame.price.basePrice.replace(priceRegex, '');
        return Number(firstPrice) - Number(secondPrice);
      });
    }
    case 'webBasePriceDescending': {
      return [...games].sort((firstGame, secondGame) => {
        const firstPrice = firstGame.price.basePrice.replace(priceRegex, ''),
          secondPrice = secondGame.price.basePrice.replace(priceRegex, '');
        return Number(secondPrice) - Number(firstPrice);
      });
    }
    default:
      return games;
  }
};

export const getGamesListClassification = (activeFilters, sortQuery) => {
  const sortedGames = sortedList(sortQuery);
  const filters = Object.keys(activeFilters).filter(
    (key) => activeFilters[key]
  );

  if (!filters.length) return sortedGames;

  const filteredGames = sortedGames.filter((element) =>
    filters.includes(element.storeDisplayClassification)
  );

  return filteredGames;
};

export const getFiltersList = () => filters;

export const getSortingOptions = () => sortingOptions;
