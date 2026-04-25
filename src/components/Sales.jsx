import React from 'react'
import { NavLink } from 'react-router-dom'
import Res from '../assets/buildings/hero.jpg'
import { motion } from 'motion/react'



const Sales = ({ property }) => {

    const parent = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.09, duration: 0.1 } }
    }

    const children = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className="relative w-full max-w-lg h-110 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{ backgroundImage: `url(${Res})` }}>
            <div className='absolute inset-0 bg-amber-400/10 z-0'></div>
            <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.5}} className="relative z-10 flex flex-col h-full" >
                <motion.div variants={children} className="w-full h-60 shrink-0">
                    <img className="w-full h-full object-cover" src={property.images} alt={property.title} />
                </motion.div>
                <div className="p-4 flex flex-col justify-between grow">
                    <div>
                        <motion.h1 variants={children} className="text-xl text-white sm:text-3xl font-semibold mb-2 line-clamp-2">{property.title}</motion.h1>
                        <motion.p variants={children} className="text-xl text-white">{property.location}</motion.p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <motion.p variants={children} className="text-3xl border-2 rounded border-white p-1 font-bold text-white mt-3">{property.price}</motion.p>
                        <NavLink to={`property/${property.id}`} className="btn btn-primary w-30">View</NavLink>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Sales
