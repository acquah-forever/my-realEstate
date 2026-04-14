import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { Routes, Route } from "react-router-dom"
import AuthDetails from './context/AuthContext'
import PropertyDetails from './components/PropertyDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <AuthDetails>
      <div className='bg-linear-to-r from-sky-400 via-indigo-500 to-purple-600 min-h-screen relative bg-slate-900 text-black' >
        <NavBar className='relative z-20' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Routes>
      </div>
      <Footer />
    </AuthDetails>
  )
}

export default App
