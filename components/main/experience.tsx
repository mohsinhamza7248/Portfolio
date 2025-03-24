import React from 'react';
import { FaCode, FaGitAlt, FaUsers, FaServer } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      icon: <FaCode className='text-blue-500 text-3xl' />,
      title: 'Junior Fullstack Developer - CodeVamp Technologies',
      duration: 'Oct 2024 - Present (6 months)',
      description: 'Leveraged React.js, Next.js, and backend technologies like Nest.js and Node.js to build scalable web applications, ensuring optimal performance and cross-browser compatibility.'
    },
    {
      icon: <FaServer className='text-yellow-500 text-3xl' />,
      title: 'Backend Development',
      description: 'Implemented robust APIs and server-side logic using Nest.js, Node.js, and Express to build secure and efficient web applications.'
    },
    {
      icon: <FaGitAlt className='text-orange-500 text-3xl' />,
      title: 'Version Control & Collaboration',
      description: 'Proficient in Git/GitHub for streamlined workflows and collaborated using Jira for task management in agile environments.'
    },
    {
      icon: <FaUsers className='text-green-500 text-3xl' />,
      title: 'Communication & Teamwork',
      description: 'Actively contributed to cross-functional teams, translating design mockups into functional interfaces using Tailwind CSS and Material-UI.'
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto pb-20 pt-30 px-6 bg-transparent text-white rounded-xl shadow-lg" id='experience'>
      <h1 className='text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Experience
      </h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border border-gray-700 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            {exp.icon}
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              {exp.duration && <p className="text-sm text-gray-400">{exp.duration}</p>}
              <p className="text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
