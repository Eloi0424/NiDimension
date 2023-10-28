// import { useState } from 'react'
// import './App.css'
import Index from './pages/index.jsx'
import {useEffect, useState} from "react";
import axios from "axios";


//  todos:
// 1. 从后端拿到图片url
// 2. 展示图片
// 3. 编写图片上传功能


function App() {
	const [pictures, setPictures] = useState([
		{
			"name": "blue",
			"url": "http://localhost:3000/public/pictures/1698468840565.png",
			"likes": 0,
			"id": "653c93e82ce0d1fab94b02a5"
		}
  ])
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
