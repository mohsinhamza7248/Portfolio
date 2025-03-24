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
                    src='/amazon.png'
                    title='Amazon Clone'
                    description='Amazon Clone Using HTML, CSS'
                    link='amazon2211.netlify.app'
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
            </div>
        </div>
    )
}

export default Projects
