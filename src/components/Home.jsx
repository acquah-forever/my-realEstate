import React from 'react'
import Hero from './Hero'
import ListingForTheDay from './ListingForTheDay'
import Interior from '../assets/buildings/interior.jpg'


const Home = () => {
  return (
    <div>
      <Hero />
      <div className='h-screen relative bg-fixed bg-cover bg-center' style={{ backgroundImage: `url(${Interior})` }}>
        <div className='absolute bg-black/20 inset-0'></div>
        <div className='relative z-10'>
          <ListingForTheDay />
        </div>
      </div>

    </div>
  )
}

export default Home
