import {Button, Image, Layout, Menu} from 'antd';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import logoUrl from '../assets/icons/logo.jpg'


const {Header} = Layout;


const IndexHeader = () => {
	const rootState = useSelector(state => state)
	const dispatch = useDispatch()
	return (
		<>
			<Header
				style={{
					display: 'flex',
					alignItems: 'start',
					background: '#fff',
				}}
			>
				<Image src={logoUrl} preview={false} style={{width:100}}/>
				<Menu
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={['find']}
					style={{width: '100%'}}
					items={[
						{
							key: 'find',
							label: '发现',
						},
						{
							key: 'publish',
							label: '发布',
						}
					]}
					onClick={(e) => {
						console.log(e)
						dispatch({type: 'SWITCH_INDEX', index: e.key})
					}}//todo 实现header 与 content的联动 通信
				/>
				{/*<Image src='src\assets\icons\logo.jpg' preview={false} style={{ maxWidth: '25%', height: '25%', borderRadius: '20%' }} />*/}
				<div className='logIn'>
					<Button type="primary" style={{marginRight: '10px'}}>Log In</Button>
				</div>
			
			</Header>
		</>
	)
}
export default IndexHeader