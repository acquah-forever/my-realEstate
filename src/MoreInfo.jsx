import React from 'react'
import { House, Goal, Smile } from 'lucide-react'


const MoreInfo = () => {
    return (
        <div className='p-10 grid grid-cols-1 '>
            <h1 className='mb-12 text-center text-3xl font-semibold'>A Curated Portfolio of Homes</h1>
            <div className='
            flex justify-between items-center space-x-10'>
                <div className='bg-amber-400/50 p-7 max-w-2xl'>
                    <div className='mb-5 flex justify-between'>
                        <h1 className='uppercase text-2xl'>Vision & Strategy</h1>
                        <House className='w-10 h-10' />
                    </div>
                    <div className='border-t-2 mb-20'></div>
                    <h3 className='text-lg'>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
                </div>

                <div className='bg-amber-400/50 p-7 max-w-2xl'>
                    <div className='mb-5 flex justify-between'>
                        <h1 className='uppercase text-2xl'>Targeted Action</h1>
                        <Goal className='w-10 h-10' />
                    </div>
                    <div className='border-t-2 mb-20'></div>
                    <h3 className='text-lg'>We leverage our network and expertise to quickly identify opportunities, handle negotiations skillfully, and guide you seamlessly through each milestone.</h3>
                </div>

                <div className='bg-amber-400/50 p-7 max-w-2xl'>
                    <div className='mb-5 flex justify-between'>
                        <h1 className='uppercase text-2xl'>Close and Live!</h1>
                        <Smile className='w-10 h-10' />
                    </div>
                    <div className='border-t-2 mb-20'></div>
                    <h3 className='text-lg'>With all the details managed precisely, we swiftly move to closing, getting you into your new home or successful investment, so you can truly start living.</h3>
                </div>
            </div>
            <button className='bg-pink-400 p-5 mx-auto rounded-lg mt-7'>Get Free Apointment</button>
        </div>
    )
}

export default MoreInfo
