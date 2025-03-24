"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const HeroContent = () => {
    const fullText = `I'm Mohsin, a passionate Full-Stack Developer with hands-on experience in building dynamic web applications. 
    Currently working as a Junior Fullstack Developer at CodeVamp Technologies, I specialize in developing scalable solutions using modern frameworks like React.js, Next.js, Nest.js, and Node.js.

    With over 6 months of experience, I've contributed to numerous projects, ensuring optimal performance, responsiveness, and seamless user experiences. 
    My strong background in MongoDB, PostgreSQL, and Prisma ORM empowers me to manage data effectively while maintaining clean and efficient code.

    Beyond coding, I excel at collaboration — actively participating in cross-functional teams using Jira for task management and Git/GitHub for version control. 
    My dedication to learning and problem-solving drives me to stay ahead of industry trends.

    Let's build something amazing together! 🚀`;

    const wordCount = fullText.split(/\s+/).length;
    const [showFullText, setShowFullText] = useState(false);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-row items-center justify-center px-20 mt-30 pt-32 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>
                        Fullstack Developer
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        Delivering
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                            {" "}innovative{" "}
                        </span>
                        web solutions
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    {showFullText ? fullText : `${fullText.split(" ").slice(0, 50).join(" ")}...`}
                </motion.p>

                {/* Buttons Section */}
                <div className="flex gap-4">
                    {wordCount > 50 && (
                        <motion.button
                            variants={slideInFromLeft(1)}
                            onClick={() => setShowFullText(!showFullText)}
                            whileHover={{ scale: 1.1, backgroundColor: "#6b46c1" }}
                            whileTap={{ scale: 0.95 }}
                            className='py-2 px-4 bg-purple-500 transition duration-300 text-center text-white cursor-pointer rounded-lg shadow-lg'
                        >
                            {showFullText ? "Show Less" : "Learn More"}
                        </motion.button>
                    )}

                    {/* Download CV Button with Animation */}
                    <motion.a
                        variants={slideInFromLeft(1.2)}
                        href="/cv.pdf"
                        download="Mohsin_CV.pdf"
                        whileHover={{ scale: 1.1, backgroundColor: "#6b46c1" }}
                        whileTap={{ scale: 0.95 }}
                        className='py-2 px-4 bg-purple-500 transition duration-300 text-center text-white cursor-pointer rounded-lg shadow-lg'
                    >
                        Download CV
                    </motion.a>
                </div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt='work icons'
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent
