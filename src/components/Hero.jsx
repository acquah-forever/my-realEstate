import React from 'react'
import { motion } from 'motion/react'
import Res from '../assets/buildings/hero.jpg'
import { HashLink } from 'react-router-hash-link'


const Hero = () => {

  return (
    <div id='hero' className='relative min-h-screen flex flex-col justify-center items-center text-center dark:bg-slate-600 bg-cover bg-center bg-fixed overflow-hidden' style={{ backgroundImage: `url(${Res})` }} >
      <div className='absolute inset-0 bg-black/20 z-0'></div>
      <div className='relative z-10 text-white space-y-10'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl text-amber-200'>Find Your Dream Home</h1>
        <h2 className='px-7 text-2xl sm:text-3xl text-white'>We understand the fact that mordern people strive for maximum comfort</h2>
      </div>
  
          <HashLink to='/#form' className="mt-10 text-white bg-linear-to-br from-pink-400 to-pink-700 px-5 sm:px-7 md:px-10 py-4 rounded-md text-xl sm:text-2xl md:text-3xl">Get Free Appointment</HashLink>
        

    </div>
  )
}

export default Hero
