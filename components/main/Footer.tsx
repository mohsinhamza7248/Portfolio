import Link from 'next/link';
import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                    {/* Community Section */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Community</div>

                        <Link
                            href="https://github.com/mohsinhamza7248"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center my-[15px] cursor-pointer transition-all duration-300 transform hover:scale-110'
                        >
                            <FaGithub className='text-gray-300' />
                            <span className='text-[15px] ml-[6px]'>Github</span>
                        </Link>

                        <Link
                            href="https://discord.com/users/1087287832369963019"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center my-[15px] cursor-pointer transition-all duration-300 transform hover:scale-110'
                        >
                            <FaDiscord className='text-blue-500' />
                            <span className='text-[15px] ml-[6px]'>Discord</span>
                        </Link>
                    </div>

                    {/* Social Media Section */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>Social Media</div>

                        <Link
                            href="https://www.instagram.com/mohsin_ansari_20?igsh=cHJqODg4aXJsd2dt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center my-[15px] cursor-pointer transition-all duration-300 transform hover:scale-110'
                        >
                            <FaInstagram className='text-pink-500' />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/mohsin-ansari-195817254/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center my-[15px] cursor-pointer transition-all duration-300 transform hover:scale-110'
                        >
                            <FaLinkedin className='text-blue-700' />
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </Link>
                    </div>

                    {/* About Section */}
                    <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                        <div className='font-bold text-[16px]'>About</div>

                        <p className='flex items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>Learning about me</span>
                        </p>

                        <p className='flex items-center my-[15px] cursor-pointer'>
                            <span className='text-[15px] ml-[6px]'>mohsinhamza7248@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* Footer Text */}
                <div className='mb-[20px] text-[15px] text-center'>
                    &copy; 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
