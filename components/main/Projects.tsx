import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>

            {/* Grid Layout for 3 Rows */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                <ProjectCard
                    src='/Medico-Humsafar.png'
                    title='Medico Humsafar'
                    description='AI-Powered Medical Report Assistan A RAG-based  tool that lets users upload medical reports (PDFs/images), extract summaries with Gemini AI, and ask questions. Uses Pinecone for semantic search and delivers real-time, context-aware answers via AI. Built with Next.js, Tailwind CSS, and Shadcn UI for a modern, responsive interface.'
                    link='https://medico-humsafar.vercel.app/'
                />
                <ProjectCard
                    src='/pizza.png'
                    title='Evergreen Pizza'
                    description=' A Next.js-powered pizza ordering app with a dynamic menu, cart system, and secure authentication (NextAuth.js + MongoDB). Features responsive design, seamless checkout, and real-time order management. Built with modern full-stack tech for performance and scalability.'
                    link='https://evergreen-pizza.vercel.app/'
                />
                <ProjectCard
                    src='/digital.png'
                    title='Digital Website'
                    description='Digital Website using HTML, CSS'
                    link='https://digital-marketing-122.netlify.app/'
                />
                <ProjectCard
                    src='/restaurant.png'
                    title='Restaurant'
                    description='Restaurant Using React, MUI CSS, Mock API'
                    link='https://1restaurant1122.netlify.app'
                />

                <ProjectCard
                    src='/gym.png'
                    title='Gym Clone'
                    description='Gym Using HTML, Bootstrap CSS'
                    link='gym21022.netlify.app'
                />
                <ProjectCard
                    src='/port-1.png'
                    title='Portfolio Clone'
                    description='Portfolio Website Using HTML, CSS, JavaScript'
                    link='https://portfolio-mohsin2.netlify.app/'
                />
                <ProjectCard
                    src='/todo.png'
                    title='YouTube Clone'
                    description='YouTube Clone Using React, CSS'
                    link='https://todo-list-1-react.netlify.app/'
                />
                <ProjectCard
                    src='/amazon.png'
                    title='Amazon Clone'
                    description='Amazon Clone Using HTML, CSS'
                    link='amazon2211.netlify.app'
                />
            </div>
        </div>
    )
}

export default Projects
