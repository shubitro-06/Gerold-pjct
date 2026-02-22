import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Banner from './Banner'
import Company from './Company'
import About from './About'
import Service from './Service'
import RecentWork from './RecentWork'
import Achivement from './Achivement'
import Review from './Review'
import Blog from './Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
      <Company/>
      <About/>
      <Service/>
      <RecentWork/>
      <Achivement/>
      <Review/>
      <Blog/>
    </>
  )
}

export default App
