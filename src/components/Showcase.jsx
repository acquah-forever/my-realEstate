import React from 'react'
import { NavLink } from 'react-router-dom'



const ShowcaseDetails = ({ details }) => {

    return (
        <div className='p-10 text-white min-h-screen relative bg-center bg-cover bg-fixed bg-no-repeat' style={{ backgroundImage: `url(${details.images})` }}>
            <div className='absolute inset-0 bg-black/20'></div>
            <div className='bg-linear-to-br from-purple-400/40  to-amber-500/40 max-w-lg p-10 relative z-50'>
                <div className='space-y-4 mb-7'>
                    <h1 className='text-3xl sm:text-4xl'>{details.title}</h1>
                    <h1 className='text-2xl sm:text-3xl'>{details.location}</h1>
                </div>
                <div className='flex justify-start sm:justify-normal space-x-5  mb-10'>
                    <div>
                        <h1 className='text-3xl mb-3'>{details.bedrooms}</h1>
                        <h1 className='font-semibold text-sm sm:text-lg'>Bedrooms</h1>
                    </div>
                    <div>
                        <h1 className='text-3xl mb-3'>{details.bathrooms}</h1>
                        <h1 className='font-semibold text-sm sm:text-lg'>Bathrooms</h1>
                    </div>
                    <div>
                        <h1 className='text-3xl mb-3'>{details.area}</h1>
                        <h1 className='font-semibold text-sm sm:text-lg'>Area(sq.ft)</h1>
                    </div>
                </div>

                <div className='w-27 hover:scale-120 ease-in-out transition-all duration-200'>
                    <NavLink to={`/showcase/${details.id}`} className='bg-linear-to-br from-green-400 to-green-600 px-10 w-70 rounded p-3'>View</NavLink>
                </div>
            </div>

        </div>
    )
}

export default ShowcaseDetails
