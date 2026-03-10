import React from 'react'
import Hero from './Hero'
import Listing1 from './Listing1'
import Listing2 from './Listing2'
import Interior from '../assets/buildings/interior.jpg'
import Interior2 from '../assets/buildings/interior2.jpg'



const Home = () => {
  return (
    <div>
      <Hero />
      <div className='h-screen relative bg-fixed bg-cover bg-center' style={{ backgroundImage: `url(${Interior})` }}>
        <div className='absolute bg-black/20 inset-0'></div>
        <div className='relative z-10'>
          <Listing1 />
        </div>
      </div>
      <div className='h-screen relative bg-fixed bg-cover bg-center' style={{ backgroundImage: `url(${Interior2})` }}>
        <div className='absolute bg-black/20 inset-0'></div>
        <div className='relative z-10'>
          <Listing2 />
        </div>
      </div>

    </div>
  )
}

export default Home
