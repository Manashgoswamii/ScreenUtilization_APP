import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Activity from './Components/Activity'
import Footer from './Components/Footer'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Activity/>
      {/* <Home/> */}
      <Footer/>
    </div>
  )
}

export default App
