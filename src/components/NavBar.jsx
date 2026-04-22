import React, { useState, useContext } from 'react'
import { House, X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { NavLink } from 'react-router-dom'
import { Auth } from '../context/AuthContext'

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  const { user, logOut } = useContext(Auth)


  function toggleMenu() {
    setMenu(!menu)
  }

  const parent = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.25, duration: 0.9 } }
  }
  const children = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <>
      <div className='mb-10 relative'>
        <div className=' px-7 py-2 backdrop-blur-2xl top-0 left-0 fixed w-full z-70 flex justify-between items-center '>
          <NavLink to= '/#hero'>
            <li className='text-red-500 flex items-center space-x-1'>
              <House className='w-7 h-7' />
              <h1 className='text-xl md:text-2xl cursor-pointer'>Kojo Addo</h1>
            </li>
          </NavLink>
          <div className='flex items-center'>
            {!user ?
              <ul className='hidden text-lg text-white bg-black/30 rounded-lg px-5 py-2 sm:flex  space-x-7'>
                <li className="cursor-pointer inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out"><NavLink to='/'>Home</NavLink></li>
                <li className="cursor-pointer inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out"><NavLink to="/logIn">Log In</NavLink></li>
                <li className="cursor-pointer inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out"><NavLink to="/signUp">Sign Up</NavLink></li>
              </ul>
              :
              <h1 className='hidden text-xl text-white bg-black/30 rounded-lg px-5 py-2 sm:flex  space-x-7'>Hello {user.email} &nbsp; <button className='cursor-pointer text-black font-semibold text-xl' onClick={logOut}>LogOut</button></h1>
            }
            <div className='flex items-center'>
              <button className='cursor-pointer text-white flex sm:hidden transition-transform ease-in-out duration-200' onClick={toggleMenu}>{menu ? <X className='text-black' /> : <Menu className='text-black' />}</button>
            </div>
          </div>
        </div>
      </div>
      <div>

        <AnimatePresence>
          {menu && (
            <div className='text-white bg-black/30 backdrop-blur-2xl min-h-20 w-full mt-2 fixed z-70 p-5 sm:hidden'>
              {!user ? (
                <div>
                  <motion.ul variants={parent} initial='hidden' animate='visible' exit={{ opacity: 0, x: -50 }} className='text-lg flex justify-center space-x-5 sm:hidden'>
                    <motion.li variants={children} className="cursor-pointer  inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out" onClick={() => setMenu(false)}><NavLink to='/'>Home</NavLink></motion.li>
                    <motion.li variants={children} className="cursor-pointer inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out" onClick={() => setMenu(false)}><NavLink to='/logIn'>Log In</NavLink></motion.li>
                    <motion.li variants={children} className="cursor-pointer inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out" onClick={() => setMenu(false)}><NavLink to='/signUp'>Sign Up</NavLink></motion.li>
                  </motion.ul>
                </div>
              ) : (
                <motion.ul variants={parent} initial='hidden' animate='visible' exit={{ opacity: 0, x: -50 }} className='flex justify-center sm:hidden'>
                  <motion.li className='flex items-center' >
                    <h1 variants={children} className='text-lg'>Hello {user.email} &nbsp;</h1>
                    <button variants={children} className='bg-gray-500 p-2 rounded' onClick={() => { logOut(); setMenu(false) }}>LogOut</button>
                    </motion.li>
                </motion.ul>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default NavBar
