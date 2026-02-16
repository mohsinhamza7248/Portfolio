"use client"

import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    name?: string; // Added optional name prop
}

const SkillsDataProvider = ({ src, width, height, index, name }: Props) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const animationDelay = 0.1;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className="flex flex-col items-center gap-2 p-4 glass-card rounded-xl hover:border-accent/50 group transition-all duration-300 w-[110px] h-[130px] justify-center"
        >
            <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={name || 'skill image'}
                    className="object-contain w-auto h-[50px]"
                />
            </div>
            {name && (
                <span className="text-gray-400 text-xs font-medium group-hover:text-white transition-colors text-center mt-2">
                    {name}
                </span>
            )}
        </motion.div>
    )
}

export default SkillsDataProvider