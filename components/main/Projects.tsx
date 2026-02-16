"use client"
import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    const projects = [
        {
            title: "Modern Next.js Portfolio",
            description: "A futuristic, responsive portfolio website built with Next.js 14, generic Framer Motion animations, and Three.js. Features a custom star field background and glassmorphism UI.",
            src: "/NextWebsite.png",
            tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
            link: "https://your-portfolio-url.com", // Replace with actual link if available or keep generic
            sourceLink: "https://github.com/mohsinhamza7248"
        },
        {
            title: "Interactive Card Component",
            description: "A visually stunning interactive card deck component fully responsive and animated, demonstrating complex CSS transforms and React state management.",
            src: "/CardImage.png",
            tags: ["React", "CSS Modules", "Interactive UI"],
            link: "https://your-card-demo.com",
            sourceLink: "https://github.com/mohsinhamza7248"
        },
        {
            title: "Space Themed Website",
            description: "An immersive space-themed landing page with smooth scrolling, parallax effects, and optimized performance.",
            src: "/SpaceWebsite.png",
            tags: ["HTML", "CSS", "JavaScript", "GSAP"],
            link: "https://your-space-demo.com",
            sourceLink: "https://github.com/mohsinhamza7248"
        },
        {
            title: "Medico Humsafar",
            description: "AI-Powered Medical Report Assistant. A RAG-based tool that lets users upload medical reports, extract summaries with Gemini AI, and ask questions.",
            src: "/Medico-Humsafar.png",
            tags: ["Next.js", "Gemini AI", "Pinecone", "Tailwind CSS"],
            link: "https://medico-humsafar.vercel.app/",
            sourceLink: "https://github.com/mohsinhamza7248"
        },
        {
            title: "Evergreen Pizza",
            description: "A Next.js-powered pizza ordering app with a dynamic menu, cart system, and secure authentication (NextAuth.js + MongoDB).",
            src: "/pizza.png",
            tags: ["Next.js", "MongoDB", "Redux", "Stripe"],
            link: "https://evergreen-pizza.vercel.app/",
            sourceLink: "https://github.com/mohsinhamza7248"
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h2 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h2>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 max-w-7xl flex-wrap justify-center'>
                {projects.map((project, index) => (
                    <div key={index} className="w-full md:w-[350px]">
                        <ProjectCard
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                            sourceLink={project.sourceLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
