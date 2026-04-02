import React from 'react'
import Hero from './Hero'
import Listing1 from './Listing1'
import Listing2 from './Listing2'
import Listing3 from './Listing3'
import Listing4 from './Listing4'
import Details from './Details'
import Interior from '../assets/buildings/interior.jpg'
import Interior2 from '../assets/buildings/interior2.jpg'
import Interior3 from '../assets/buildings/interior3.jpg'
import Interior4 from '../assets/buildings/interior4.jpg'
import MoreInfo from './MoreInfo'
import Sales from './Sales'
import { Comments } from './ClientComments'
import Reviews from './Reviews'
import Form from './Form'
import Footer from './Footer'

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
      <div className='h-screen relative bg-fixed bg-cover bg-center' style={{ backgroundImage: `url(${Interior3})` }}>
        <div className='absolute bg-black/20 inset-0'></div>
        <div className='relative z-10'>
          <Listing3 />
        </div>
      </div>
      <div className='h-screen relative bg-fixed bg-cover bg-center' style={{ backgroundImage: `url(${Interior4})` }}>
        <div className='absolute bg-black/20 inset-0'></div>
        <div className='relative z-10'>
          <Listing4 />
        </div>
      </div>
      <div className='bg-amber-100'>
        <Details />
      </div>
      <div className='bg-amber-100 grid drid-cols-1 itemas-center'>
        <MoreInfo />
      </div>
      <div>
        <Sales />
      </div>
      <div className='bg-amber-100 gap-10 p-15 grid grid-cols-1 justify-between items-center md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center lg:items-center'>
        {Comments.map((item) => (
          <Reviews
            key={item.id}
            icon={item.icon}
            comment={item.comment}
            name={item.name}
          />
        ))}
      </div>
      <div className='min-h-screen p-10'>
        <Form />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Home
