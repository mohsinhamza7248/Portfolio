"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[10px] border border-accent/30 opacity-[0.9] bg-surface/50 backdrop-blur-md'
            >
                <SparklesIcon className='text-accent mr-[10px] h-5 w-5' />
                <h1 className='text-gray-300 text-[13px] font-medium tracking-wide uppercase'>
                    My Tech Stack
                </h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)}
                className='text-[30px] md:text-[40px] text-white font-bold mt-[10px] text-center mb-[15px]'
            >
                Making apps with modern technologies
            </motion.div>
            <motion.div variants={slideInFromRight(0.5)}
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Never miss a task, deadline or idea
            </motion.div>
        </div>
    )
}

export default SkillText