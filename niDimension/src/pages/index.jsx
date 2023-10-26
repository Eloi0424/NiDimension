import { Layout, theme } from 'antd';
import IndexHeader from '../components/indexHeader';
import IndexContent from '../components/indexContent.jsx';
import IndexFooter from '../components/indexFooter';
const Index = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <IndexHeader />
      <IndexContent colorBgContainer={colorBgContainer}/>
      <IndexFooter />
    </Layout>
  );
};
export default Index;