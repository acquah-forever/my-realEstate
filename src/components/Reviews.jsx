import React from 'react'
import {Star} from "lucide-react"

const Reviews = ({icon, comment, name}) => {
  return (
    <div>
      <span>{icon}</span>
      <p>{comment}</p>
      <h3>{name}</h3>
      
    </div>
  )
}

export default Reviews
