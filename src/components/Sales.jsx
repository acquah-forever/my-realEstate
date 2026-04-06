import React from 'react'
import { Link } from 'react-router-dom'
import Res from '../assets/buildings/hero.jpg'



const Sales = ({ property }) => {

    return (
        <div className="relative w-full max-w-lg h-110 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{ backgroundImage: `url(${Res})` }}>
            <div className='absolute inset-0 bg-amber-400/10 z-0'></div>
            <div className="relative z-10 flex flex-col h-full" >
                <div className="w-full h-60 shrink-0">
                    <img className="w-full h-full object-cover" src={property.images} alt={property.title} />
                </div>
                <div className="p-4 flex flex-col justify-between grow">
                    <div>
                        <h1 className="text-xl text-white sm:text-3xl font-semibold mb-2 line-clamp-2">{property.title}</h1>
                        <p className="text-xl text-white">{property.location}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className="text-3xl font-bold text-green-200 mt-3">{property.price}</p>
                        <Link to={`property/${property.id}`} className="btn btn-primary w-30">View</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales
