import React from 'react'
import { Star } from "lucide-react"

const Reviews = ({ icon, comment, name }) => {
  return (
    <div className="bg-slate-200/70 p-5 rounded-xl shadow-md space-y-5 flex flex-col items-center text-center h-full">

      <span className="text-amber-400 text-3xl flex">{icon}</span>

      <p className="text-gray-600 text-xl font-semibold">{comment}</p>

      <h3 className="font-bold text-lg text-gray-800">{name}</h3>

    </div>
  );
};

export default Reviews
