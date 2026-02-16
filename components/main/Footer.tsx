import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full bg-surface/50 backdrop-blur-md border-t border-white/5 pt-10 pb-8 mt-20'>
            <div className='max-w-7xl mx-auto px-5 md:px-10 flex flex-col items-center justify-between gap-10 md:flex-row'>

                {/* Brand & Copyright */}
                <div className="text-center md:text-left">
                    <div className="font-bold text-xl tracking-tight text-white mb-2">
                        Mohsin<span className="text-accent">.</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Building digital experiences that matter.
                    </p>
                    <p className="text-gray-600 text-xs mt-4">
                        &copy; {currentYear} Mohsin Ansari. All rights reserved.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <Link href="https://github.com/mohsinhamza7248" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/mohsin-ansari-195817254/" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link href="https://www.instagram.com/mohsin_ansari_20" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://discord.com/users/1087287832369963019" target="_blank" className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <FaDiscord size={24} />
                    </Link>
                </div>

                {/* Contact CTA */}
                <div className="text-center md:text-right">
                    <p className="text-gray-400 text-sm mb-2">Ready to work together?</p>
                    <a
                        href="mailto:mohsinhamza7248@gmail.com"
                        className="text-accent hover:text-primary transition-colors font-medium"
                    >
                        mohsinhamza7248@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
