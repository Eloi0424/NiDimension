import { Layout, theme } from 'antd';
import IndexHeader from '../components/indexHeader';
import IndexContent from '../components/indexContent.jsx';
import IndexFooter from '../components/indexFooter';
const Index = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <IndexHeader />
      <IndexContent colorBgContainer={colorBgContainer} pictures={props.pictures}/>
      <IndexFooter />
    </Layout>
  );
};
export default Index;