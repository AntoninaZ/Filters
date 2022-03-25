import { Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { setSortingOption } from '../../redux/sortingOptionSlice';

export default function SortingList() {
  const sortingList = useSelector((state) => state.sorting.sortingOptionsList);
  const activeSortingOption = useSelector(
    (state) => state.sorting.activeSortingOption
  );
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setSortingOption(e.target.value));
  };

  return (
    <Radio.Group onChange={onChange} value={activeSortingOption}>
      {sortingList.map((item, index) => (
        <Radio key={item.name} value={index}>
          {item.displayName}
        </Radio>
      ))}
    </Radio.Group>
  );
}
