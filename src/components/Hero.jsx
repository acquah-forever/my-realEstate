import React from 'react'
import { motion } from 'motion/react'
import Res from '../assets/buildings/hero.jpg'
import { HashLink } from 'react-router-hash-link'


const Hero = () => {

  return (
    <div id='hero' className='bg-[url("https://plus.unsplash.com/premium_photo-1754251306733-120ef8883f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] relative min-h-screen flex flex-col justify-start  text-center bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden' >
      <div className='absolute inset-0 bg-black/30 z-0'></div>
      <div className='relative z-10 text-white text-left space-y-10 px-7 py-10 mt-70 sm:mt-75 md:mt-80'>
        <h1 className='text-5xl sm:text-6xl text-center sm:text-left md:text-7xl text-amber-200'>Find Your Dream Home</h1>
        <h2 className='text-2xl text-center sm:text-left sm:text-3xl text-white'>We understand the fact that modern people strive for maximum comfort</h2>
        <div className='mt-15 w-fit mx-auto sm:mx-0 hover:scale-110 transition-all ease-in-out duration-300'>
          <HashLink to='/#form' className="border-2 relative z-10 mt-10 text-white bg-linear-to-br from-blue-400/50 px-5 sm:px-7 md:px-10 py-4 rounded-md text-xl sm:text-2xl md:text-3xl">Get Free Appointment</HashLink>
        </div>
      </div>

    </div>
  )
}

export default Hero
