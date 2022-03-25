import { Collapse } from "antd";

import SortingList from "../SortingList/SortingList";
import FiltersList from "../FiltersList/FiltersList";

const { Panel } = Collapse;

export default function Filters() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Sort" key="1">
        <SortingList></SortingList>
      </Panel>
      <Panel header="Type" key="2">
        <FiltersList></FiltersList>
      </Panel>
    </Collapse>
  );
}
