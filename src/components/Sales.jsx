import React from 'react'


const Sales = ({property}) => {
    
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <div>
            <img className="w-full h-48 object-cover" src={property.images} alt={property.title} />
        </div>
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-1">{property.title}</h1>
            <p className="text-xl font-semibold mb-1">{property.location}</p>
        </div>
        <div>
            <p className="text-lg font-bold text-green-600 mb-3">{property.price}</p>
        </div>
      
    </div>
  )
}

export default Sales
