import React from 'react'
import { motion } from 'motion/react'
import Res from '../assets/buildings/hero.jpg'
import { HashLink } from 'react-router-hash-link'

const parent = {
  hidden:{opacity:0, y:-50},
  visible:{opacity:1, y:0, transition:{staggerChildren: 0.5, duration:0.8}}
}

const children = {
  hidden:{opacity:0, y:-50},
  visible:{opacity:1, y:0}
}

const Hero = () => {

  return (
    <div id='hero' className='bg-[url("https://plus.unsplash.com/premium_photo-1754251306733-120ef8883f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] relative min-h-screen flex flex-col justify-start  text-center bg-cover bg-center bg-fixed bg-no-repeat overflow-hidden' >
      <div className='absolute inset-0 bg-black/30 z-0'></div>
      <motion.div variants={parent} initial="hidden" animate="visible" viewport={{once:true, amount:0.3}} className='relative z-10 text-white text-left space-y-10 px-7 py-10 mt-70 sm:mt-75 md:mt-80'>
        <motion.h1 variants={children} className='text-5xl sm:text-6xl text-center sm:text-left md:text-7xl text-amber-200'>Find Your Dream Home</motion.h1>
        <motion.h2 variants={children} className='text-2xl text-center sm:text-left sm:text-3xl text-white'>We understand the fact that modern people strive for maximum comfort</motion.h2>
        <div  className='mt-15 w-fit mx-auto sm:mx-0 hover:scale-105 transition-all ease-in-out duration-300'>
          <motion.HashLink variants={children} to='/#form' className="border-2 relative z-10 mt-10 text-white px-5  py-4 rounded-md text-xl sm:text-2xl md:text-3xl">Get Free Appointment</motion.HashLink>
        </div>
      </motion.div>

    </div>
  )
}

export default Hero
