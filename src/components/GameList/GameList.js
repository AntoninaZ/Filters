import { List } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getGamesListClassification } from '../../services/api/games.api';
import GameListItem from '../GameListItem/GameListItem';

export default function GameList() {
  const activeFilters = useSelector((state) => state.filterType.activeFilters);

  const games = getGamesListClassification(activeFilters);

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
