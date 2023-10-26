import PropTypes from 'prop-types';
import { Layout} from 'antd';
const { Content} = Layout;


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
        
        




      </div>
    </Content>
  )
}

IndexContent.propTypes = {
  colorBgContainer: PropTypes.string.isRequired,
};
export default IndexContent