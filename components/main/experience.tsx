"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import { FaCode, FaServer, FaGitAlt, FaUsers } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      icon: <FaCode className='text-3xl' />,
      title: 'Fullstack Developer',
      company: 'CodeVamp Technologies',
      duration: 'Oct 2024 - Present',
      color: 'text-blue-500',
      description: 'Leveraged React.js, Next.js, and backend technologies like Nest.js and Node.js to build scalable web applications, ensuring optimal performance and cross-browser compatibility.'
    },
    {
      icon: <FaServer className='text-3xl' />,
      title: 'Backend Development',
      company: 'Freelance / Projects',
      duration: 'Oct 2024 - Present',
      color: 'text-yellow-500',
      description: 'Implemented robust APIs and server-side logic using Nest.js, Node.js, and Express to build secure and efficient web applications.'
    },
    {
      icon: <FaGitAlt className='text-3xl' />,
      title: 'Version Control & Collaboration',
      company: 'Open Source',
      duration: 'Ongoing',
      color: 'text-orange-500',
      description: 'Proficient in Git/GitHub for streamlined workflows and collaborated using Jira for task management in agile environments.'
    },
    {
      icon: <FaUsers className='text-3xl' />,
      title: 'Communication & Teamwork',
      company: 'Various Teams',
      duration: 'Ongoing',
      color: 'text-green-500',
      description: 'Actively contributed to cross-functional teams, translating design mockups into functional interfaces using Tailwind CSS and Material-UI.'
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 z-20 overflow-hidden" id='experience'>
      <div className="w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
            Work Experience
          </span>
        </h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInFromLeft(index * 0.2)}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(249,115,22,0.5)] z-10" />

              {/* Content Card */}
              <div className="glass-card p-6 md:p-8 rounded-xl border border-white/5 hover:border-accent/30 group">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-surface ${exp.color} bg-opacity-20 w-fit`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
