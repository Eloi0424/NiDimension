// import { useState } from 'react'
// import './App.css'
import Index from './pages/index.jsx'
import {useEffect, useState} from "react";
import axios from "axios";


const [pictures, setPictures] = useState([])



// useEffect(() => {
//   axios.
//   }
// ,[])



//  todos:
// 1. 从后端拿到图片url
// 2. 展示图片
// 3. 编写图片上传功能






function App() {

  return (
    <>
      <Index pictures={pictures}/>
    </>
  )
}

export default App
