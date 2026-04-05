import React from 'react'
import { Link } from 'react-router-dom'


const Sales = ({ property }) => {

    return (
        <div className="w-full max-w-lg h-110 rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="w-full h-60 shrink-0">
                <img className="w-full h-full object-cover" src={property.images} alt={property.title} />
            </div>
            <div className="p-4 flex flex-col justify-between grow">
                <div>
                    <h1 className="text-xl sm:text-3xl font-semibold mb-2 line-clamp-2">{property.title}</h1>
                    <p className="text-xl text-gray-600">{property.location}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-2xl font-bold text-green-600 mt-3">{property.price}</p>
                    <Link to={`property/${property.id}`} className="btn btn-primary w-30">View</Link>
                </div>
            </div>
        </div>
    )
}

export default Sales
