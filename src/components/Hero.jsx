import React from 'react'
import {motion} from 'motion/react'


const Hero = () => {
  return (
    <div className='p-5 min-h-screen flex flex-col justify-center items-center text-center' >
      <div className='text-white space-y-10'>
        <h1 className='text-7xl'>Find Your Dream Home</h1>
        <h2 className='text-3xl'>We understand the fact that mordern people strive for maximum comfort</h2>
        <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis iste repellat blanditiis! Sapiente, repudiandae!</p>
         <button className="btn btn-secondary text-3xl p-10">Contact Us Now</button>
      </div>

    </div>
  )
}

export default Hero
