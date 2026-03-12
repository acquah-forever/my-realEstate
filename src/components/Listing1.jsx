import React from 'react'

const ListingForTheDay = () => {
    return (
        <div id='listings' className='p-15 flex justify-center md:justify-start'>
            <div className=' bg-amber-200/70 text-slate-600 200 max-w-lg p-10'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl mb-10'>En Garde City Loft with Skyline View</h1>
                <h2 className='text-xl sm:text-2xl mb-30'>A stunning loft conversion, blending Industrial Chic with Warm, Contemporary Living</h2>
                <div className='border-t-2'></div>
                <div className='flex mt-20 space-x-5 text-xl sm:text-2xl'>
                    <h1>3 Bed</h1>
                    <h1>2 Bath</h1>
                    <h1>200Sqm</h1>
                </div>
            </div>
        </div>
    )
}

export default ListingForTheDay