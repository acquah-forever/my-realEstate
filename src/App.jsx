import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { Routes, Route } from "react-router-dom"
import Res from './assets/buildings/hero.jpg'
import AuthDetails from './context/AuthContext'
import PropertyDetails from './components/PropertyDetails'

const App = () => {
  return (
    <AuthDetails>
      <div className='min-h-screen relative text-black dark:bg-slate-600 bg-cover bg-center bg-fixed' style={{ backgroundImage: `url(${Res})` }}>
        <div className='absolute inset-0 bg-black/60 -z-50'></div>
        <NavBar className='relative z-20' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
      </div>
    </AuthDetails>
  )
}

export default App
