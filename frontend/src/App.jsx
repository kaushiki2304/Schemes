import React from 'react'
// import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import Footer from './components/Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Schemes from './components/Schemes'







const App = () => {
  return (

  
  

    <div>
      <BrowserRouter>
        <SnackbarProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/schemes' element={<Schemes/>}/>
            <Route path='/footer' element={<Footer/>}/>
            
            <Route path='*' element={<Notfound />} />
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>

    </div>

  )
}

export default App;

