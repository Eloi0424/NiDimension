import PropTypes from 'prop-types';
import {Card, Image, Layout, List} from 'antd';
import Find from "../pages/find.jsx";
import Publish from "../pages/publish.jsx";
import {useDispatch, useSelector} from "react-redux";

const {Content} = Layout;


const IndexContent = (props) => {
  const rootState = useSelector(state => state)
  const dispatch = useDispatch()
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
				{rootState.index === 'find' ? <Find pictures = {props.pictures}/> : null}
				{rootState.index === 'publish' ? <Publish/> : null}
      </div>
    </Content>
  )
}

IndexContent.propTypes = {
  colorBgContainer: PropTypes.string.isRequired,
};
export default IndexContent