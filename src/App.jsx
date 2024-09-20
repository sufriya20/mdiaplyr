import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Dashboard from './Pages/Dashboard'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/his' element={<History/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      </Routes> 
      <Footer/>
      <ToastContainer/>
   </>
  )
}

export default App
