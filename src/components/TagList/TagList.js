import { Tag, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import facetOptions from '../../services/mocks/filters.json';

import {
  setActiveFiters,
  resetActiveFiters,
} from '../../redux/filtersListSlice';

export default function TagList() {
  const activeFilters = useSelector((state) => state.filterType.activeFilters);
  const dispatch = useDispatch();

  function hanlerClose(key) {
    dispatch(setActiveFiters(key));
  }

  function handlerReset() {
    dispatch(resetActiveFiters());
  }

  const tags = facetOptions.filter((item) => activeFilters[item.key]);
  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <>
      <div>
        {tags.map((item) => (
          <Tag key={item.key} closable onClose={() => hanlerClose(item.key)}>
            {item.displayName}
          </Tag>
        ))}
      </div>
      {hasActiveFilters && (
        <Button type="link" onClick={handlerReset}>
          Reset Filters
        </Button>
      )}
    </>
  );
}
