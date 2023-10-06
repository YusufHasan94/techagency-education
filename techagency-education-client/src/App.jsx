import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default App
