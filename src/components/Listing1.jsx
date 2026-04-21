import React from 'react'

const ListingForTheDay = () => {
    return (
        <div id='listings' className='px-6 py-12 sm:px-10 md:px-16 lg:px-24 flex justify-center md:justify-start'>
            <div className=' bg-amber-200/70 text-slate-600 200 w-full max-w-2xl p-6 sm:p-8 md:p-10 '>
                <h1 className='text-3xl sm:text-4xl md:text-6xl mb-6'>En Garde City Loft with Skyline View</h1>
                <h2 className='text-xl sm:text-2xl mb-10'>A stunning loft conversion, blending Industrial Chic with Warm, Contemporary Living</h2>
                <div className='border-t-2 mb-6'></div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-wrap gap-3 text-base sm:text-lg md:text-xl items-center'>
                        <h1>3 Bed</h1>
                        <h1>2 Bath</h1>
                        <h1>200Sqm</h1>
                    </div>
                    <div>
                        <button className='text-white bg-linear-to-br from-green-400 to-green-600 px-8 py-2 rounded-lg'>
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingForTheDay