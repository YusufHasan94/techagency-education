
import './App.css'
import Navbar from './Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default App
