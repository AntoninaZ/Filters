import { List } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../redux/gamesSlice';

import GameListItem from '../GameListItem/GameListItem';

export default function GameList() {
  const activeFilters = useSelector((state) => state.filters.activeFilters);
  const activeSortingOption = useSelector(
    (state) => state.sorting.activeSortingOption
  );
  const games = useSelector((state) => state.gameList.games);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames({ activeFilters, activeSortingOption }));
  }, [activeFilters, activeSortingOption, dispatch]);

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={games}
      renderItem={(item) => (
        <List.Item>
          <GameListItem item={item} />
        </List.Item>
      )}
    />
  );
}
