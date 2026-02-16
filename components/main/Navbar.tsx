"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About Me", href: "#about-me" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
    ];

    const socialLinks = [
        { icon: FaInstagram, href: "https://www.instagram.com/mohsin_ansari_20", color: "hover:text-pink-500" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohsin-ansari-195817254/", color: "hover:text-blue-500" },
        { icon: FaGithub, href: "https://github.com/mohsinhamza7248", color: "hover:text-white" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="#about-me" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors">
                            <Image
                                src="/logo-1.png"
                                alt="Mohsin Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white group-hover:text-gradient transition-all">
                            Mohsin<span className="text-accent">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center gap-5">
                        {socialLinks.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                target="_blank"
                                className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-300 hover:text-accent transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex gap-6 mt-4">
                                {socialLinks.map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        className={`text-gray-400 ${social.color}`}
                                    >
                                        <social.icon size={24} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
