import React from 'react'
import {motion} from 'motion/react'


const Hero = () => {
  return (
    <div className='p-5 min-h-screen flex flex-col justify-center items-center text-center' >
      <div className='text-white space-y-10'>
        <h1 className='text-6xl sm:text-7xl md:text-8xl text-amber-200'>Find Your Dream Home</h1>
        <h2 className='text-3xl text-white'>We understand the fact that mordern people strive for maximum comfort</h2>
         <button className="btn btn-secondary text-2xl sm:text-3xl md:text-4xl p-10">Get Free Appointment</button>
      </div>

    </div>
  )
}

export default Hero
