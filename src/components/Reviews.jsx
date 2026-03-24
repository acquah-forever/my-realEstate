import React from 'react'
import {Star} from "lucide-react"

const Reviews = ({icon, comment, name}) => {
  return (
    <div className='w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white p-6 rounded-xl shadow-md space-y-5 flex flex-col items-center text-center'>
      <span className='flex justify-center'>{icon}</span>
      <p className='text-center'>{comment}</p>
      <h3 className='text-center'>{name}</h3>
    </div>
  )
}

export default Reviews
