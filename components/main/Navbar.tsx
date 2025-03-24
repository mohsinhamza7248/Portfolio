"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
            <div className="flex justify-between items-center h-[65px]">
                {/* Logo + Name */}
                <a href="#about-me" className="flex items-center">
                    <Image
                        src="/logo-1.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <span className="font-bold ml-2 text-gray-300">Mohsin Ansari</span>
                </a>

                {/* Desktop Navigation (Same Styling as You Wanted) */}
                <div className="hidden md:flex w-[500px] h-full items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer">About Me</a>
                        <a href="#skills" className="cursor-pointer">Skills</a>
                        <a href="#experience" className="cursor-pointer">Experience</a>
                        <a href="#projects" className="cursor-pointer">Projects</a>
                    </div>
                </div>

                {/* Social Icons (Desktop) */}
                <div className="hidden md:flex space-x-4">
                    <Link href="https://www.instagram.com/mohsin_ansari_20" target="_blank">
                        <FaInstagram className="text-pink-500" size={25} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/mohsin-ansari-195817254/" target="_blank">
                        <FaLinkedin className="text-blue-500" size={25} />
                    </Link>
                    <Link href="https://github.com/mohsinhamza7248" target="_blank">
                        <FaGithub className="text-white" size={25} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#030014] backdrop-blur-md py-4 text-center">
                    <a href="#about-me" className="block py-2 text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>About Me</a>
                    <a href="#skills" className="block py-2 text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#experience" className="block py-2 text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#projects" className="block py-2 text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a>

                    <div className="flex justify-center gap-5 mt-4">
                        <Link href="https://www.instagram.com/mohsin_ansari_20" target="_blank">
                            <FaInstagram className="text-pink-500" size={25} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mohsin-ansari-195817254/" target="_blank">
                            <FaLinkedin className="text-blue-500" size={25} />
                        </Link>
                        <Link href="https://github.com/mohsinhamza7248" target="_blank">
                            <FaGithub className="text-white" size={25} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
