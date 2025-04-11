import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ecommerce from '../assets/ecommerce.png'
import milk from '../assets/milk_store.png'

const projects = [
  {
    id: 1,
    name: 'MILKSTORE',
    description:
      'A full-stack e-commerce platform for dairy products with user authentication, product catalog, and secure checkout.',
    technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
    repo: 'https://github.com/Vinhhieu653/milk-store.git',
    image: milk
  },
  {
    id: 2,
    name: 'E-COMMERCE',
    description:
      'Complete online shopping solution with product management, cart functionality, and payment integration.',
    technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
    repo: 'https://github.com/Vinhhieu653/E-Commerce.git',
    image: ecommerce
  }
]

function Projects() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className='bg-gradient-to-b from-gray-900 to-black py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            My Projects
          </h2>
          <p className='text-gray-400 mt-6 max-w-2xl mx-auto'>
            Showcasing my development work with modern frameworks and technologies
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl transition duration-500 backdrop-blur-sm'
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className='relative overflow-hidden h-56'>
                <img
                  src={project.image}
                  alt={project.name}
                  className={`w-full h-full object-cover object-center transition-all duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80`}></div>
                <div className='absolute bottom-4 left-4'>
                  <h3 className='text-2xl font-bold text-white tracking-wider'>{project.name}</h3>
                </div>
              </div>

              <div className='p-6'>
                <p className='text-gray-300 mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='px-3 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex flex-wrap gap-4'>
                  <a
                    href={project.repo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300'
                  >
                    <FaGithub className='text-gray-300' />
                    <span>Repository</span>
                  </a>

                  <Link
                    to={`/projects/${project.id}`}
                    className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:opacity-90 transition duration-300'
                  >
                    <FaExternalLinkAlt />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
