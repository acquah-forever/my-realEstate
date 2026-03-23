import React from 'react'
import House1 from '../assets/buildings/house1.jpg'
import House2 from '../assets/buildings/house2.jpg'
import House3 from '../assets/buildings/house3.jpg'

const RecentSales = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-10 px-5 lg:px-10'>

            {/* LEFT SECTION */}
            <div className='p-4 lg:w-1/3'>
                <h1 className='text-3xl sm:text-4xl'>Recent Sales</h1>

                <div className='mt-5 flex justify-center lg:justify-start'>
                    <button className='cursor-pointer text-white text-lg sm:text-xl bg-amber-900 px-6 py-3 rounded-lg mt-5'>
                        Get Free Appointment
                    </button>
                </div>
            </div>

            {/* GRID SECTION */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-2/3'>

                {/* CARD 1 */}
                <div className='relative'>
                    <img className='w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg' src={House1} alt='house1' />

                    <div className='absolute top-5 left-5 right-5 bg-amber-300/90 p-4 rounded-md'>
                        <h1 className='mb-4 text-lg sm:text-xl'>GREENWICH VILLAGE TOWNHOUSE</h1>
                        <h2 className='mb-3 text-sm sm:text-base'>A pre-war renovated property in an exclusive neighborhood.</h2>
                        <div className='border-t-2 mb-3'></div>
                        <div className='flex flex-wrap gap-3 text-sm'>
                            <h1>2 Bed</h1>
                            <h1>2 Bath</h1>
                            <h1>165 sqm</h1>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className='relative'>
                    <img className='w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg' src={House2} alt='house2' />

                    <div className='absolute top-5 left-5 right-5 bg-amber-300/90 p-4 rounded-md'>
                        <h1 className='mb-4 text-lg sm:text-xl'>DOWNTOWN SKYLINE PENTHOUSE</h1>
                        <h2 className='mb-3 text-sm sm:text-base'>Luxurious living with breathtaking cityscapes from every room</h2>
                        <div className='border-t-2 mb-3'></div>
                        <div className='flex flex-wrap gap-3 text-sm'>
                            <h1>3 Bed</h1>
                            <h1>2.5 Bath</h1>
                            <h1>190 sqm</h1>
                        </div>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className='relative'>
                    <img className='w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg' src={House3} alt='house3' />

                    <div className='absolute top-5 left-5 right-5 bg-amber-300/90 p-4 rounded-md'>
                        <h1 className='mb-4 text-lg sm:text-xl'>MODERN CITY LOFT WITH TERRACE</h1>
                        <h2 className='mb-3 text-sm sm:text-base'>Elegant design and urban serenity with a private outdoor space.</h2>
                        <div className='border-t-2 mb-3'></div>
                        <div className='flex flex-wrap gap-3 text-sm'>
                            <h1>3 Bed</h1>
                            <h1>3 Bath</h1>
                            <h1>167 sqm</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecentSales