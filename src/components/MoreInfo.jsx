import React from 'react'
import { House, Goal, Smile } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'


const MoreInfo = () => {
    return (
        <div className='p-10'>
            <h1 className='mb-12 text-center text-3xl font-semibold'>A Curated Portfolio of Homes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10'>
                <div className='bg-amber-400/50 p-5 sm:p-6 md:p-7 max-w-2xl w-full'>
                    <div className='mb-4 flex items-center justify-between'>
                        <h1 className='uppercase text-xl sm:text-2xl'>Vision & Strategy</h1>
                        <House className='"w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </div>
                    <div className='border-t-2 mb-6'></div>
                    <h3 className='text-base sm:text-lg text-left leading-relaxed max-w-prose'>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
                </div>

                <div className='bg-amber-400/50 p-5 sm:p-6 md:p-7 max-w-2xl w-full'>
                    <div className='mb-4 flex items-center justify-between'>
                        <h1 className='uppercase text-xl sm:text-2xl'>Vision & Strategy</h1>
                        <Goal className='"w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </div>
                    <div className='border-t-2 mb-6'></div>
                    <h3 className='text-base sm:text-lg text-left leading-relaxed max-w-prose'>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
                </div>

                <div className='bg-amber-400/50 p-5 sm:p-6 md:p-7 max-w-2xl w-full'>
                    <div className='mb-4 flex items-center justify-between'>
                        <h1 className='uppercase text-xl sm:text-2xl'>Vision & Strategy</h1>
                        <Smile className='"w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </div>
                    <div className='border-t-2 mb-6'></div>
                    <h3 className='text-base sm:text-lg text-left leading-relaxed max-w-prose'>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
                </div>
            </div>
            <div className='mt-10 flex justify-center'>
            <HashLink smooth to='/#form' className='cursor-pointer text-white text-xl sm:text-2xl bg-pink-400 p-5 mx-auto rounded-lg mt-7'>Get Free Apointment</HashLink>
            </div>
        </div>
    )
}

export default MoreInfo
