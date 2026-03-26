import React from 'react'
import House1 from '../assets/buildings/house1.jpg'
import House2 from '../assets/buildings/house2.jpg'
import House3 from '../assets/buildings/house3.jpg'

const RecentSales = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between px-4 sm:px-5 lg:px-10 py-5'>

        
            <div className='p-4 lg:w-1/3 flex flex-col mb-6 lg:mb-0'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left mb-4'>Recent Sales</h1>

                <div className='mt-5 flex justify-center lg:justify-start'>
                    <button className='cursor-pointer text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-amber-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto'>
                        Get Free Appointment
                    </button>
                </div>
            </div>

        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:w-2/3'>

             
                <div className='relative'>
                    <img className='w-full h-48 sm:h-64 md:h-72 lg:h-140 object-cover rounded-lg' src={House1} alt='house1' />

                    <div className='absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 bg-amber-300/60 p-3 sm:p-4 rounded-md'>
                        <h1 className='mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>GREENWICH VILLAGE TOWNHOUSE</h1>
                        <h2 className='mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>A pre-war renovated property in an exclusive neighborhood.</h2>
                        <div className='border-t-2 mb-2 sm:mb-3'></div>
                        <div className='flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                            <h1>2 Bed</h1>
                            <h1>2 Bath</h1>
                            <h1>165 sqm</h1>
                        </div>
                    </div>
                </div>

                
                <div className='relative'>
                    <img className='w-full h-48 sm:h-64 md:h-72 lg:h-140 object-cover rounded-lg' src={House2} alt='house2' />

                    <div className='absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 bg-amber-300/60 p-3 sm:p-4 rounded-md'>
                        <h1 className='mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>DOWNTOWN SKYLINE PENTHOUSE</h1>
                        <h2 className='mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Luxurious living with breathtaking cityscapes from every room</h2>
                        <div className='border-t-2 mb-2 sm:mb-3'></div>
                        <div className='flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                            <h1>3 Bed</h1>
                            <h1>2.5 Bath</h1>
                            <h1>190 sqm</h1>
                        </div>
                    </div>
                </div>

             
                <div className='relative'>
                    <img className='w-full h-48 sm:h-64 md:h-72 lg:h-140 object-cover rounded-lg' src={House3} alt='house3' />

                    <div className='absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 bg-amber-300/60 p-3 sm:p-4 rounded-md'>
                        <h1 className='mb-2 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>MODERN CITY LOFT WITH TERRACE</h1>
                        <h2 className='mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Elegant design and urban serenity with a private outdoor space.</h2>
                        <div className='border-t-2 mb-2 sm:mb-3'></div>
                        <div className='flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
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