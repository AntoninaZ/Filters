import { Layout, PageHeader } from 'antd';

import TagList from '../../components/TagList/TagList';
import GameList from '../../components/GameList/GameList';

const Page = () => (
  <>
    <PageHeader>Bestsellers</PageHeader>
    <TagList />
    <Layout>
      <GameList />
    </Layout>
  </>
);

export default Page;
