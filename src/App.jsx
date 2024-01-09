import React from 'react'
// import './App.css'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Notfound from './Components/Notfound'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Schemes from './Components/Schemes'







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

