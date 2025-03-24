import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
            <Image
                src={src}
                alt={title}
                width={1000}
                height={5000}
                className='w-full object-contain'
            />
            <div className='relative p-4'>
                <h2 className='text-xl font-bold mt-4 text-white'>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        {title}
                    </a>
                </h2>
                <p className='mt-2 text-gray-300'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard