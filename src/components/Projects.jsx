import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ecommerce from '../assets/ecommerce.png'
import milk from '../assets/milk_store.png'

const projects = [
  {
    id: 1,
    name: 'MILKSTORE PROJECT',
    description: 'React JS, MongoDB, Express, Node JS',
    repo: 'https://github.com/Vinhhieu653/milk-store.git',
    image: milk
  },
  {
    id: 2,
    name: 'E-COMMERCE PROJECT',
    description: 'React JS, MongoDB, Express, Node JS',
    repo: 'https://github.com/Vinhhieu653/E-Commerce.git',
    image: ecommerce
  }
]

function Projects() {
  return (
    <div className='max-w-6xl mx-auto py-20 px-4 bg-gray-900'>
      <h2 className='text-4xl font-bold text-white mb-12 text-center'>My Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition duration-300 transform hover:-translate-y-2 border border-gray-700'
          >
            <Link to={`/projects/${project.id}`}>
              <motion.img
                src={project.image}
                alt={project.name}
                whileHover={{ scale: 1.05 }}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-2xl font-bold text-white mb-2'>{project.name}</h3>
              <p className='text-gray-400 text-sm'>{project.description}</p>
            </Link>

            <div className='mt-4 flex gap-3'>
              <a
                href={project.repo}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-black transition-all duration-300'
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <FaGithub />
                </motion.div>
                Repo
              </a>

              <Link
                to={`/projects/${project.id}`}
                className='px-4 py-2 border border-green-400 text-green-300 rounded-md hover:bg-gradient-to-r hover:from-green-400 hover:to-teal-400 hover:text-black transition-all duration-300'
              >
                View Detail
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
