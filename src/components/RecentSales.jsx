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

            <div className='flex'>
                <div>
                    <img className='w-98 h-221 object-cover' src={House1} alt='house1' />
                </div>
                <div>
                    <img className='w-100 h-221 object-cover' src={House2} alt='house2' />
                </div>
                <div>
                    <img className='w-md h-221 object-cover' src={House3} alt='house3' />
                </div>


            </div>

        </div>
    )
}

export default RecentSales
