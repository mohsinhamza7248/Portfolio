import { Backend_skill, Frontend_skill, Full_stack } from '@/constants'
import React from 'react'
import SkillsDataProvider from '../sub/SkillsDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
    return (
        <section
            className='flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden pb-20 py-10'
            id='skills'
        >
            <SkillText />

            <div className='flex flex-col items-center gap-10 mt-10 w-full max-w-6xl px-10'>

                {/* Frontend Section */}
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-gray-400 text-sm tracking-widest uppercase mb-6">Frontend</h3>
                    <div className='flex flex-row justify-center flex-wrap gap-5 items-center w-full'>
                        {Frontend_skill.map((image, index) => (
                            <SkillsDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                                name={image.skill_name}
                            />
                        ))}
                    </div>
                </div>

                {/* Backend Section */}
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-gray-400 text-sm tracking-widest uppercase mb-6">Backend</h3>
                    <div className='flex flex-row justify-center flex-wrap gap-5 items-center w-full'>
                        {Backend_skill.map((image, index) => (
                            <SkillsDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                                name={image.skill_name}
                            />
                        ))}
                    </div>
                </div>

                {/* Full Stack / Tools Section */}
                <div className="flex flex-col items-center w-full">
                    <h3 className="text-gray-400 text-sm tracking-widest uppercase mb-6">Tools & Native</h3>
                    <div className='flex flex-row justify-center flex-wrap gap-5 items-center w-full'>
                        {Full_stack.map((image, index) => (
                            <SkillsDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                                name={image.skill_name}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills