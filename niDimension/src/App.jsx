// import { useState } from 'react'
// import './App.css'
import Index from './pages/index.jsx'
import {useEffect, useState} from "react";
import axios from "axios";
import {createStore} from "redux";


//  todos:
// 1. 从后端拿到图片url
// 2. 展示图片
// 3. 编写图片上传功能


function App() {
	const [pictures, setPictures] = useState([])
	const [loading, setLoading] = useState(true);
	useEffect(() => {
			axios.get('http://localhost:3000/api/pictures')
				.then(res => {
					setPictures(res.data.data)
					setLoading(false);
				})
				.catch(err => {
					console.log(err)
					setLoading(false);
				})
		}
		, [])
	if (loading) {
		return <div>加载中...</div>; // 这里你可能想要显示一个加载动画或信息
	}
	return (
		<>
			<Index pictures={pictures}/>
		</>
	)
}

export default App
