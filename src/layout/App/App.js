import { Layout as AntLayout } from 'antd';

import 'antd/dist/antd.css';

import PsPage from '../Page/Page';
import PsSideBar from '../../components/PsSideBar/PsSideBar';

import './app.css';

const { Header: AntHeader, Content: AntContent, Footer: AntFooter } = AntLayout;

function App() {
  return (
    <div className="App">
      <AntLayout>
        <AntHeader />
        <AntLayout>
          <AntContent>
            <PsPage />
          </AntContent>
          <PsSideBar />
        </AntLayout>
        <AntFooter />
      </AntLayout>
    </div>
  );
}

export default App;
