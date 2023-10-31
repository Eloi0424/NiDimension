import { Layout, theme } from 'antd';
import IndexHeader from '../components/IndexHeader.jsx';
import IndexContent from '../components/IndexContent.jsx';
import IndexFooter from '../components/IndexFooter.jsx';
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