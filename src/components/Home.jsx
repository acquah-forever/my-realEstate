import React from 'react'
import Hero from './Hero'
import Details from './Details'
import MoreInfo from './MoreInfo'
import { getProperties } from '../data/Data'
import Sales from './Sales'
import { getComments } from './ClientComments'
import Reviews from './Reviews'
import Form from './Form'

const Home = () => {

  const properties = getProperties()
  const comments  = getComments()

  return (
    <div className='bg-linear-to-r from-sky-400 via-indigo-500 to-purple-600'>
      <Hero />
      <div className='bg-amber-100'>
        <Details />
      </div>
      <div className='bg-amber-100 grid drid-cols-1 itemas-center'>
        <MoreInfo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 px-10 py-10">
        {properties.map((property) => (
          <Sales property = {property} key = {property.id}/>
        ))}
      </div>

      <div className='bg-amber-100 gap-10 p-15 grid grid-cols-1 justify-between items-center md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center lg:items-center'>
        {comments.map((item) => (
          <Reviews item = {item} key = {item.id}
          />
        ))}
      </div>
      <div className='min-h-screen p-10'>
        <Form />
      </div>


    </div>
  )
}

export default Home
