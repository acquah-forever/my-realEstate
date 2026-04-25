import React from 'react'
import { motion } from 'motion/react';
const Reviews = ({ item }) => {
  const parent = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.09, duration: 0.1 } }
  }

  const children = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <motion.div variants={parent} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.5}} className="bg-slate-200/70 p-5 rounded-xl shadow-md space-y-5 flex flex-col items-center text-center h-full">

      <motion.span variants={children} variants={children} className="text-amber-400 text-3xl flex">{item.icon}</motion.span>

      <motion.p variants={children} className="text-gray-600 text-xl font-semibold">{item.comment}</motion.p>

      <motion.h3 variants={children} className="font-bold text-lg text-gray-800">{item.name}</motion.h3>

    </motion.div>
  );
};

export default Reviews
