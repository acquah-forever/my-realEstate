import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, spring } from 'motion/react'

const ShowcaseDetails = ({ details }) => {

    const parent = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.09, duration: 0.1 } }
    }

    const children = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='p-10 text-white min-h-screen relative bg-center bg-cover bg-fixed bg-no-repeat' style={{ backgroundImage: `url(${details.images})` }}>
            <div className='absolute inset-0 bg-black/20'></div>
            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.5}} className='bg-linear-to-br from-purple-400/40  to-amber-500/40 max-w-lg p-10 relative z-50'>
                <div className='space-y-4 mb-7'>
                    <motion.h1 variants={children} className='text-3xl sm:text-4xl'>{details.title}</motion.h1>
                    <motion.h1 variants={children} className='text-2xl sm:text-3xl'>{details.location}</motion.h1>
                </div>
                <div className='flex justify-start sm:justify-normal space-x-5  mb-10'>
                    <div>
                        <motion.h1 variants={children} className='text-3xl mb-3'>{details.bedrooms}</motion.h1>
                        <motion.h1 variants={children} className='font-semibold text-sm sm:text-lg'>Bedrooms</motion.h1>
                    </div>
                    <div>
                        <motion.h1 variants={children} className='text-3xl mb-3'>{details.bathrooms}</motion.h1>
                        <motion.h1 variants={children} className='font-semibold text-sm sm:text-lg'>Bathrooms</motion.h1>
                    </div>
                    <div>
                        <motion.h1 variants={children} className='text-3xl mb-3'>{details.area}</motion.h1>
                        <motion.h1 variants={children} className='font-semibold text-sm sm:text-lg'>Area(sq.ft)</motion.h1>
                    </div>
                </div>

                <motion.div variants={children} whileHover={{scale:1.2}} whileTap={{scale:0.8}} transition={{type:"spring", stiffness:300, damping:7}} className='w-27  '>
                    <NavLink  to={`/showcase/${details.id}`} className='bg-linear-to-br from-green-400 to-green-600 px-10 w-70 rounded p-3'>View</NavLink>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default ShowcaseDetails
