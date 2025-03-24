"use client"
import React from 'react'
import HeroContent from '../sub/HeroContent'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Link from 'next/link'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className='relative flex flex-col h-full w-full' id='about-me'>
            {/* <video
                autoPlay
                muted
                loop
                className='rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover'
            >
                <source src='/blackhole.webm' type='video/webm' />
            </video> */}
            <div className="relative flex flex-col items-center justify-center  pt-36  text-white text-center" >
                <h1>Hi, I&#39;m Mohsin</h1>


                <TypeAnimation
                    sequence={[
                        "Full-Stack Developer",
                        1000,
                        "React & Next.js Expert",
                        1000,
                        "Nest.js & MongoDB Developer",
                        1000,
                        "Passionate Coder",
                        1000,
                    ]}
                    wrapper="h2"
                    className="text-2xl md:text-4xl font-semibold text-gray-300"
                    repeat={Infinity}
                />

                <p className="mt-4 text-lg text-gray-400 max-w-2xl">
                    A skilled full-stack developer at CodeVamp with expertise in React.js, Next.js, and Nest.js.
                    Passionate about building high-performance, scalable applications.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="mt-6 flex gap-4">
                    <Link href="mailto:mohsinhamza7248@gmail.com">
                        <motion.button
                            variants={slideInFromLeft(1)}
                            whileHover={{ scale: 1.1, backgroundColor: "#6b46c1" }}
                            whileTap={{ scale: 0.95 }}
                            className='py-2 px-4 bg-purple-500 transition duration-300 text-center text-white cursor-pointer rounded-lg shadow-lg'
                        >
                            Hire Me
                        </motion.button>
                    </Link>
                    <Link href="https://github.com/mohsinhamza7248" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            variants={slideInFromLeft(1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className='py-2 px-4 border border-gray-500 transition duration-300 text-center text-white cursor-pointer rounded-lg shadow-lg'
                        >
                            View My Work
                        </motion.button>
                    </Link>
                </div></div>

            <HeroContent />
        </div>
    )
}

export default Hero