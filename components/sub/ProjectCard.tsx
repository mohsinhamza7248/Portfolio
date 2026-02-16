import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
    src: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    sourceLink?: string;
}

const ProjectCard = ({ src, title, description, tags, link, sourceLink }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 glass-card">
            <div className="relative w-full h-48 md:h-64 overflow-hidden">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {link && (
                        <Link href={link} target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm border border-white/20">
                            <FaExternalLinkAlt className="text-white w-5 h-5" />
                        </Link>
                    )}
                    {sourceLink && (
                        <Link href={sourceLink} target="_blank" className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all backdrop-blur-sm border border-white/20">
                            <FaGithub className="text-white w-5 h-5" />
                        </Link>
                    )}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;