import { Button, Image, Layout, Menu } from 'antd';
const { Header} = Layout;


const IndexHeader = () => {
  return (
    <>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo">
          <Image src='src\assets\icons\logo.jpg' preview={false} style={{ maxWidth: '25%', height: '25%', borderRadius: '20%' }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['showImage']}
          style={{ width: '100%' }}
          items={[
            {
              key: 'showImage',
              label: 'Show Image',
            },
          ]}
        />
        <div className='logIn'>
          <Button type="primary" style={{ marginRight: '10px' }}>Log In</Button>
        </div>
      </Header>
    </>
  )
}
export default IndexHeader