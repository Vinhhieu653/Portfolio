import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ecommerce from '../assets/ecommerce.png';
import milk from '../assets/milk-store.png';

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
];

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
            className='bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300'
          >
            <Link to={`/projects/${project.id}`}>
              <motion.img
                src={project.image}
                alt={project.name}
                whileHover={{ scale: 1.05 }}
                className='w-full h-48 object-cover rounded-md mb-4'
              />
              <h3 className='text-2xl font-bold text-white mb-2'>{project.name}</h3>
              <p className='text-gray-300 text-sm'>{project.description}</p>
            </Link>

            <div className='mt-4 flex gap-3'>
              <a
                href={project.repo}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-black transition'
              >
                <FaGithub />
                Repo
              </a>
              <Link
                to={`/projects/${project.id}`}
                className='px-4 py-2 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition'
              >
                View Detail
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
