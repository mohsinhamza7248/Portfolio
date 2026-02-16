"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { CubeIcon, CommandLineIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const Services = () => {
    return (
        <section className='flex flex-col items-center justify-center py-20 relative z-20'>
            <div className="text-center mb-12 max-w-[600px] px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">Deliver</span>
                </h2>
                <p className="text-gray-400">
                    High-performance solutions tailored to business needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 max-w-7xl w-full">
                {/* Service 1 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.2)}
                    className="glass-card p-8 rounded-2xl border border-white/5 hover:border-accent/50 group flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-accent/20 transition-colors">
                        <CubeIcon className="w-10 h-10 text-purple-400 group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Full-Stack Scalability</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Building robust applications using Next.js and Nest.js with a focus on performance, SEO, and server-side rendering.
                    </p>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft(0.4)}
                    className="glass-card p-8 rounded-2xl border border-white/5 hover:border-accent/50 group flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-accent/20 transition-colors">
                        <CommandLineIcon className="w-10 h-10 text-cyan-400 group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Clean Architecture</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Writing maintainable, type-safe code with TypeScript, implementing solid database schemas with Prisma and MongoDB.
                    </p>
                </motion.div>

                {/* Service 3 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromRight(0.2)}
                    className="glass-card p-8 rounded-2xl border border-white/5 hover:border-accent/50 group flex flex-col items-center text-center"
                >
                    <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:bg-accent/20 transition-colors">
                        <DevicePhoneMobileIcon className="w-10 h-10 text-pink-400 group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Modern UI/UX</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Crafting pixel-perfect, responsive interfaces with Tailwind CSS and Framer Motion that feel premium and interactive.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Services