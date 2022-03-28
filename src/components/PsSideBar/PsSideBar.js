import { Collapse, Layout } from 'antd';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SortingList from '../SortingList/SortingList';
import FiltersList from '../FiltersList/FiltersList';

import {
  fetchSortingOption,
  setActiveSortingOption,
} from '../../redux/sortingOptionSlice';
import { fetchFilters, setActiveFiters } from '../../redux/filtersListSlice';

const { Panel } = Collapse;
const { Sider: AntSider } = Layout;

export default function PsSideBar() {
  const sortingList = useSelector((state) => state.sorting.sortingOptionsList);
  const activeSortingOption = useSelector(
    (state) => state.sorting.activeSortingOption
  );

  const { filtersList, activeFilters } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const onSortingOptionChange = useCallback(
    (value) => {
      dispatch(setActiveSortingOption(value));
    },
    [dispatch]
  );

  const onActiveFitersChange = useCallback(
    (value) => {
      dispatch(setActiveFiters(value));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchSortingOption());
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <AntSider className="site-layout-background" width={200}>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Sort" key="1">
          <SortingList
            items={sortingList}
            activeItem={activeSortingOption}
            onChange={onSortingOptionChange}
          />
        </Panel>
        <Panel header="Type" key="2">
          <FiltersList
            items={filtersList}
            activeItem={activeFilters}
            onChange={onActiveFitersChange}
          />
        </Panel>
      </Collapse>
    </AntSider>
  );
}
