import { List, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import facetOptions from '../../services/mocks/filters.json';
import { setActiveFiters } from '../../redux/filtersListSlice';

export default function FiltersList() {
  const activeFilters = useSelector((state) => state.filterType.activeFilters);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setActiveFiters(e.target.id));
  };

  return (
    <List
      dataSource={facetOptions}
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
