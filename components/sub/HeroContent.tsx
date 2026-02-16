"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-5 md:px-20 mt-40 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[10px] border border-accent/30 opacity-[0.9] bg-surface/50 backdrop-blur-md'
                >
                    <SparklesIcon className='text-accent mr-[10px] h-5 w-5' />
                    <h1 className='text-gray-300 text-[13px] font-medium tracking-wide uppercase'>
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-5xl md:text-7xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight'
                >
                    <span>
                        Building
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 block md:inline md:pl-2'>
                            Digital Experiences
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I&apos;m Mohsin, a Full-Stack Developer specializing in building scalable web applications with Next.js, React, and Nest.js.
                    <br className="hidden md:block" />
                    Turning complex problems into elegant, high-performance solutions.
                </motion.p>

                <motion.div
                    variants={slideInFromLeft(1)}
                    className="text-xl text-gray-300 font-medium h-8"
                >
                    <TypeAnimation
                        sequence={[
                            "React & Next.js Expert",
                            2000,
                            "Nest.js & MongoDB Backend",
                            2000,
                            "Scalable Architecture",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-accent"
                    />
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(1.2)}
                    className="flex flex-col md:flex-row gap-5 mt-4"
                >
                    <a href="#projects" className="btn-primary py-3 px-8 rounded-lg cursor-pointer text-center font-medium shadow-lg hover:shadow-accent/20">
                        View My Work
                    </a>
                    <a href="https://drive.google.com/file/d/1-z9P7n43FXcHC8dWjlL3_fe1YbBrTBMT/view?usp=drive_link" download="Mohsin_CV.pdf" className="btn-secondary py-3 px-8 rounded-lg cursor-pointer text-center font-medium">
                        View CV
                    </a>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
                {/* 
                  Note: The original image src was "/mainIconsdark.svg". 
                  Ensure this asset exists or replace with a generic coding illustration if needed.
                */}
                <Image
                    src="/mainIconsdark.svg"
                    alt='work icons'
                    height={650}
                    width={650}
                    className="drop-shadow-2xl"
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
