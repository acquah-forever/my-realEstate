import React from 'react'
import { Star } from "lucide-react"

const Reviews = ({ icon, comment, name }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-5 flex flex-col items-center text-center h-full">

      <span className="text-amber-500 text-3xl flex">{icon}</span>

      <p className="text-gray-600">{comment}</p>

      <h3 className="font-semibold text-gray-800">{name}</h3>

    </div>
  );
};

export default Reviews
