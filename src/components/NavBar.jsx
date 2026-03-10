import React, { useState } from 'react'
import { House, X, Menu } from "lucide-react"
import { motion, AnimatePresence, transform, easeInOut, easeIn, easeOut } from "motion/react"

const NavBar = () => {
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(!menu)
  }

  const parent = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.25, duration: 0.8 } }
  }
  const children = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className='p-5'>
      <div className='p-4 backdrop-blur-2xl top-0 left-0 fixed w-full z-50 flex justify-between items-center '>
        <div className='text-white flex items-center space-x-1'>
          <House className='w-10 h-10' />
          <h1 className='text-2xl md:text-3xl cursor-pointer'>Kojo Addo</h1>
        </div>
        <div>
          <ul className='hidden text-xl text-white sm:flex space-x-7 px-3 py-1'>
            <li><a href="#" className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">Home</a></li>
            <li><a href="#" className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">Listings</a></li>
            <li><a href="#" className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">About</a></li>
            <li><a href="#" className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">Services</a></li>
          </ul>
          <div className='flex items-center'>
            <button className='cursor-pointer text-white flex sm:hidden transition-transform ease-in-out duration-200' onClick={toggleMenu}>{menu ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
      <div>
        <AnimatePresence>
          {menu && (
            <div className='text-white p-3 mt-10 rounded-xl flex  justify-center items-center space-x-4'>
              <motion.ul variants={parent} initial='hidden' animate='visible' exit={{ opacity: 0, x: -50 }} className='text-2xl flex justify-center space-x-5 sm:hidden'>
                <motion.li variants={children} onClick={() => setMenu(!menu)}> <a href='#' className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">Home</a></motion.li>
                <motion.li variants={children} onClick={() => setMenu(!menu)}> <a href='#' className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">Listings</a></motion.li>
                <motion.li variants={children} onClick={() => setMenu(!menu)}> <a href='#' className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">About</a></motion.li>
                <motion.li variants={children} onClick={() => setMenu(!menu)}> <a href='#' className="inline-block border-b-2 border-transparent hover:border-white transition-all duration-500 ease-in-out">Services</a></motion.li>
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NavBar
