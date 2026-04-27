import React from 'react'
import { motion } from 'motion/react'

const Details = () => {

    const parent = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.6 } }
    }

    const children = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.5}} className='p-10 grid md:flex md:gap-20' id='details'>
            <motion.div variants={children} className='mt-15'>
                <h1 className='text-xl md:text-2xl'>Exclusive Guidance for</h1>
                <h1 className='mt-10 text-3xl font-semibold'>Buyers, Sellers & Investors</h1>
            </motion.div>

            <motion.div variants={children} className='mt-15 tracking-tighter'>
                <div>
                    <div className='border'></div>
                    <div className='p-5 flex flex-col gap-4 md:flex-row md:gap-10 '>
                        <h1 className='text-lg md:text-xl'>01.</h1>
                        <h1 className='text-lg md:text-xl uppercase'>Buying</h1>
                        <h1 className='text-lg md:text-xl'>Skip endless searches. We leverage exclusive access and expert negotiation to pinpoint your ideal home, ensuring a smooth, swift purchase. Your next chapter begins today.</h1>
                    </div>
                </div>

                <div>
                    <div className='border'></div>
                    <div className='p-5 flex flex-col gap-4 md:flex-row md:gap-10'>
                        <h1 className='text-lg md:text-xl'>02.</h1>
                        <h1 className='text-lg md:text-xl uppercase'>Selling</h1>
                        <h1 className='text-lg md:text-xl'>Skip endless searches. We leverage exclusive access and expert negotiation to pinpoint your ideal home, ensuring a smooth, swift purchase. Your next chapter begins today.</h1>
                    </div>
                </div>


                <div>
                    <div className='border'></div>
                    <div className='p-5 flex flex-col gap-3 md:flex-row md:gap-10'>
                        <h1 className='text-lg md:text-xl'>03.</h1>
                        <h1 className='text-lg md:text-xl uppercase'>Leasing</h1>
                        <h1 className='text-lg md:text-xl'>Skip endless searches. We leverage exclusive access and expert negotiation to pinpoint your ideal home, ensuring a smooth, swift purchase. Your next chapter begins today.</h1>
                    </div>
                </div>


                <div>
                    <div className='border'></div>
                    <div className='p-5 flex flex-col gap-4 md:flex-row md:gap-10'>
                        <h1 className='text-md md:text-xl'>04.</h1>
                        <h1 className='text-md md:text-xl uppercase'>Renting</h1>
                        <h1 className='text-md md:text-xl'>Skip endless searches. We leverage exclusive access and expert negotiation to pinpoint your ideal home, ensuring a smooth, swift purchase. Your next chapter begins today.</h1>
                    </div>
                </div>
            </motion.div>


        </motion.div>
    )
}

export default Details
