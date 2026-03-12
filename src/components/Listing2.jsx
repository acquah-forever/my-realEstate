import React from 'react'

const Listing2 = () => {
    return (
        <div className='p-15 flex justify-center md:justify-end'>
            <div className='bg-amber-200/70 text-slate-600 200 max-w-lg p-10'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl mb-10'>Serene Parkside Apartment at The Bluffs</h1>
                <h2 className='text-xl sm:text-2xl mb-30'>An immaculate apartment offering tranquil park views and minimalist luxury, truly an oasis in the city.</h2>
                <div className='border-t-2'></div>
                <div className='mt-20 flex space-x-5 text-xl sm:text-2xl'>
                    <h1>3 Bed</h1>
                    <h1>3 Bath</h1>
                    <h1>250Sqm</h1>
                </div>
            </div>
        </div>
    )
}

export default Listing2
