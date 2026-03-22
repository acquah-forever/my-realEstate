import React from 'react'
import House1 from '../assets/buildings/house1.jpg'
import House2 from '../assets/buildings/house2.jpg'
import House3 from '../assets/buildings/house3.jpg'

const RecentSales = () => {
    return (
        <div>
            <div>
                <h1>Recent Sales</h1>
                <div>
                    <button>Get Free Consultation</button>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <img className='w-98 h-auto object-cover' src={House1} alt='house1' />
                </div>
                <div>
                    <img className='w-100 h-auto object-cover' src={House2} alt='house2' />
                </div>
                <div>
                    <img className='w-md h-auto object-cover' src={House3} alt='house3' />
                </div>


            </div>

        </div>
    )
}

export default RecentSales
