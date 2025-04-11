import { useParams, Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ecommerce from '../assets/ecommerce.png'
import milk from '../assets/milk_store.png'

const projectData = {
  2: {
    name: 'E-Commerce Project',
    image: ecommerce,
    technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS', 'JWT Auth'],
    repo: 'https://github.com/Vinhhieu653/E-Commerce.git',
    demoLink: null,
    details: [
      'Developed for e-commerce purposes, targeting customers who want to shop online and experience a seamless purchasing journey.',
      'Built a responsive and dynamic frontend using ReactJS and Tailwind CSS, ensuring an optimized user experience across all devices.',
      'Utilized MongoDB for efficient data storage and retrieval, allowing for scalable and high-performance database operations.',
      'Developed the backend with Express and Node.js, implementing robust API endpoints for smooth communication between client and server.',
      'Implemented an MVC structure to maintain code modularity, making the application easier to manage and extend in the future.',
      'Integrated authentication and authorization mechanisms to ensure secure transactions and protect user data.',
      'Designed an intuitive and engaging UI/UX, making it easy for users to navigate, browse products, and complete their purchases effortlessly.',
      'Added a real-time cart system and order management to enhance the shopping experience and improve user convenience.'
    ]
  },
  1: {
    name: 'Milk Store',
    image: milk,
    technologies: ['React', 'MongoDB', 'Express', 'Node.js', 'Tailwind CSS', 'Payment API'],
    repo: 'https://github.com/Vinhhieu653/milk-store.git',
    demoLink: null,
    details: [
      'Developed for people who want to buy milk but do not have time to go outside, allowing them to purchase it conveniently from anywhere.',
      'Created an interactive and user-friendly frontend using ReactJS and Tailwind CSS, ensuring a smooth and visually appealing shopping experience.',
      'Utilized MongoDB as the primary database to manage user accounts, product listings, and order history efficiently.',
      'Implemented a secure backend with Express and Node.js, handling order processing, authentication, and product inventory.',
      'Followed the MVC structure to improve maintainability and scalability of the codebase, making it easier to introduce new features.',
      'Integrated a recommendation system to suggest relevant products based on user preferences and purchase history.',
      'Developed a seamless checkout process with multiple payment options, reducing friction in the purchasing journey.',
      'Added a subscription feature for customers who need regular milk deliveries, allowing automated orders and scheduled deliveries.'
    ]
  }
}

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projectData[id]

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  if (!project)
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-900 p-4'>
        <div className='max-w-md text-center p-8 bg-gray-800 rounded-xl shadow-xl border border-gray-700'>
          <h2 className='text-2xl font-bold text-red-400 mb-4'>Project Not Found</h2>
          <p className='text-gray-300 mb-6'>The project you are looking for does not exist or has been removed.</p>
          <Link
            to='/projects'
            className='inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300'
          >
            <FaArrowLeft className='mr-2' />
            Return to Projects
          </Link>
        </div>
      </div>
    )

  return (
    <div className='bg-gradient-to-b from-gray-900 to-black py-12 px-4 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        {/* Breadcrumb */}
        <div className='mb-6'>
          <Link to='/projects' className='inline-flex items-center text-gray-400 hover:text-white transition-colors'>
            <FaArrowLeft className='mr-2' />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className='bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 shadow-xl backdrop-blur-sm mb-8'>
          <div className='relative'>
            <div className='w-full h-64 md:h-80 overflow-hidden'>
              <img src={project.image} alt={project.name} className='w-full h-full object-cover object-center' />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent'></div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 p-6'>
              <h1 className='text-3xl md:text-4xl font-bold text-white mb-2'>{project.name}</h1>
            </div>
          </div>

          {/* Project Actions */}
          <div className='flex flex-wrap gap-4 p-6 border-t border-gray-700'>
            {project.repo && (
              <a
                href={project.repo}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300'
              >
                <FaGithub />
                Repository
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:opacity-90 transition duration-300'
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Column - Technologies */}
          <div className='md:col-span-1'>
            <div className='bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 shadow-lg backdrop-blur-sm'>
              <h2 className='text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-700'>Technologies</h2>

              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className='md:col-span-2'>
            <div className='bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 shadow-lg backdrop-blur-sm'>
              <h2 className='text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-700'>Project Details</h2>

              <ul className='space-y-4'>
                {project.details.map((detail, index) => (
                  <li key={index} className='flex text-gray-300'>
                    <span className='mr-3 text-green-400 mt-1 flex-shrink-0'>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
