import PropTypes from 'prop-types';
import {Card, Image, Layout, List} from 'antd';

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
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={props.pictures}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                title={item.name}
                cover={<img alt="example" src={item.url}/>}
                style={{width: '80%'}}
              >
                {item.description} {item.likes}
              </Card>
            </List.Item>
          )}
        />
        {/*{props.pictures.map((picture) => {*/}
        {/*  return (*/}
        {/*    <div>*/}
        {/*      <img src={picture.url} alt={picture.name} width = {'10%'}/>*/}
        {/*      <p>{picture.description} {picture.likes}</p>*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*})}*/}
      </div>
    </Content>
  )
}

IndexContent.propTypes = {
  colorBgContainer: PropTypes.string.isRequired,
};
export default IndexContent