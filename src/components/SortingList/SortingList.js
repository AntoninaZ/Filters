import { Radio } from 'antd';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchSortingOption,
  setActiveSortingOption,
} from '../../redux/sortingOptionSlice';

export default function SortingList() {
  const sortingList = useSelector((state) => state.sorting.sortingOptionsList);
  const activeSortingOption = useSelector(
    (state) => state.sorting.activeSortingOption
  );
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(setActiveSortingOption(e.target.value));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchSortingOption());
  }, [dispatch]);

  return (
    <Radio.Group onChange={onChange} value={activeSortingOption}>
      {sortingList.map((item) => (
        <Radio key={item.name} value={item.name}>
          {item.displayName}
        </Radio>
      ))}
    </Radio.Group>
  );
}
