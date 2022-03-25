import { Layout as AntLayout } from "antd";

import "antd/dist/antd.css";

import PsPage from "../Page/Page";
import PsFilters from "../../components/Filters/Filters";

import "./app.css";

const { Header: AntHeader, Content: AntContent, Footer: AntFooter, Sider: AntSider } = AntLayout;

function App() {
  return (
    <div className="App">
      <AntLayout>
        <AntHeader />
        <AntLayout>
          <AntContent>
            <PsPage />
          </AntContent>
          <AntSider className="site-layout-background" width={200}>
            <PsFilters />
          </AntSider>
        </AntLayout>
        <AntFooter />
      </AntLayout>
    </div>
  );
}

export default App;
