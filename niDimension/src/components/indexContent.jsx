import PropTypes from 'prop-types';
import {Card, Image, Layout, List} from 'antd';
import Find from "../pages/find.jsx";

const {Content} = Layout;


const IndexContent = (props) => {
  return (
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <div
        className="site-layout-content"
        style={{
          background: props.colorBgContainer,
        }}
      >
        <Find pictures ={props.pictures} />
      </div>
    </Content>
  )
}

IndexContent.propTypes = {
  colorBgContainer: PropTypes.string.isRequired,
};
export default IndexContent