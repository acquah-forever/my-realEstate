import React from 'react'
import {Star} from "lucide-react"

const Reviews = ({icon, comment, name}) => {
  return (
    <div className='space-y-5'>
      <span className='flex justify-center'>{icon}</span>
      <p className='text-center'>{comment}</p>
      <h3 className='text-center'>{name}</h3>
    </div>
  )
}

export default Reviews
