import React from 'react'
import House1 from '../assets/buildings/house1.jpg'
import House2 from '../assets/buildings/house2.jpg'
import House3 from '../assets/buildings/house3.jpg'

const RecentSales = () => {
    return (
        <div className='flex justify-between'>
            <div className='p-7'>
                <h1 className='text-3xl sm:text-4xl'>Recent Sales</h1>
                <div className='mt-5 flex justify-center'>
                    <button className='cursor-pointer text-white text-xl sm:text-2xl bg-amber-900 p-5 mx-auto rounded-lg mt-7'>Get Free Apointment</button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='relative'>
                    <div>
                        <img className='w-98 h-221 object-cover' src={House1} alt='house1' />
                    </div>
                    <div className='absolute top-10 bg-amber-300/80 p-4 w-90'>
                        <h1 className='mb-10 text-2xl'>GREENWICH VILLAGE TOWNHOUSE</h1>
                        <h2 className='mb-4 text-xl'>A pre-war renovated property in an exclusive neighborhood.</h2>
                        <div className='border-t-2 mb-4'></div>
                        <div className='flex gap-5 text-2xl'>
                            <h1>2 Bed</h1>
                            <h1>2 Bath</h1>
                            <h1>165 sqm</h1>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <img className='w-100 h-221 object-cover' src={House2} alt='house2' />
                    </div>
                    <div className='absolute top-10 bg-amber-300/80 p-4 w-90'>
                        <h1 className='mb-10 text-2xl'>DOWNTOWN SKYLINE PENTHOUSE</h1>
                        <h2 className='mb-4 text-xl'>Luxurious living with breathtaking cityscapes from every room</h2>
                        <div className='border-t-2 mb-4'></div>
                        <div className='flex gap-5 text-2xl'>
                            <h1>3 Bed</h1>
                            <h1>2.5 Bath</h1>
                            <h1>190 sqm</h1>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <div>
                        <img className='w-md h-221 object-cover' src={House3} alt='house3' />
                    </div>
                    <div className='absolute top-10 bg-amber-300/80 p-4 w-90'>
                        <h1 className='mb-10 text-2xl'>MODERN CITY LOFT WITH TERRACE</h1>
                        <h2 className='mb-4 text-xl'>Elegant design and urban serenity with a private outdoor space.</h2>
                        <div className='border-t-2 mb-4'></div>
                        <div className='flex gap-3 text-2xl'>
                            <h1>3 Bed</h1>
                            <h1>2 Bath</h1>
                            <h1>167 sqm</h1>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default RecentSales
