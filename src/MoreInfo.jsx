import React from 'react'
import { House } from 'lucide-react'

const MoreInfo = () => {
    return (
        <div className='p-7 flex justify-between space-x-10'>
            <div className='bg-amber-400/50 p-7 border-2 max-w-2xl'>
                <div className='flex'>
                    <House />
                    <h1>A curated Portfolio of Homes</h1>
                </div>
                <h1>Vision and Strategy</h1>
                <div></div>
                <h3>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
            </div>

            <div className='p-7 bg-amber-400/50 border-2 max-w-2xl'>
                <div className='flex'>
                    <House />
                    <h1>A curated Portfolio of Homes</h1>
                </div>
                <h1>Vision and Strategy</h1>
                <div></div>
                <h3>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
            </div>

            <div className='p-7 bg-amber-400/50 border-2 max-w-2xl'>
                <div className='flex'>
                    <House />
                    <h1>A curated Portfolio of Homes</h1>
                </div>
                <h1>Vision and Strategy</h1>
                <div></div>
                <h3>We start with a focused conversation to understand your exact goals and craft a personalized, direct strategy to achieve them without delay.</h3>
            </div>
        </div>
    )
}

export default MoreInfo
