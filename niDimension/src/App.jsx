// import { useState } from 'react'
// import './App.css'
import Index from './pages/index.jsx'


const pictures = [
  {
    url: "src/assets/pictures/red.png",
    name: "red",
    description: "a red picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/green.png",
    name: "green",
    description: "a green picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/blue.png",
    name: "blue",
    description: "a blue picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/red.png",
    name: "red",
    description: "a red picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/green.png",
    name: "green",
    description: "a green picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/blue.png",
    name: "blue",
    description: "a blue picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/red.png",
    name: "red",
    description: "a red picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/green.png",
    name: "green",
    description: "a green picture",
    likes: 0
  },
  {
    url: "src/assets/pictures/blue.png",
    name: "blue",
    description: "a blue picture",
    likes: 0
  }
]


function App() {

  return (
    <>
      <Index pictures={pictures}/>
    </>
  )
}

export default App
