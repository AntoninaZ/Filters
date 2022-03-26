import { List, Checkbox } from 'antd';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchFilters, setActiveFiters } from '../../redux/filtersListSlice';

export default function FiltersList() {
  const filtersList = useSelector((state) => state.filters.filtersList);
  const activeFilters = useSelector((state) => state.filters.activeFilters);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(setActiveFiters(e.target.id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <List
      dataSource={filtersList}
      renderItem={(item) => (
        <List.Item>
          <Checkbox
            id={item.key}
            checked={activeFilters[item.key]}
            onChange={onChange}
          >
            {item.displayName}
          </Checkbox>
        </List.Item>
      )}
    ></List>
  );
}
