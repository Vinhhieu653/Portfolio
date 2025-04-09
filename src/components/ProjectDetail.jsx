import { useParams, Link } from 'react-router-dom'
import React from 'react'

const projectData = {
  2: {
    name: 'E-Commerce Project',
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

  if (!project)
    return (
      <div className='flex items-center justify-center min-h-[70vh] p-4'>
        <div className='max-w-md text-center p-8 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-red-600 mb-4'>Project Not Found</h2>
          <p className='text-gray-600 mb-6'>The project you are looking for does not exist or has been removed.</p>
          <Link to='/projects' className='inline-flex items-center text-blue-600 font-medium'>
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'></path>
            </svg>
            Return to Projects
          </Link>
        </div>
      </div>
    )

  return (
    <div className='py-8 px-4 sm:px-6 md:px-8 min-h-[70vh]'>
      <div className='max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-6 sm:p-8 border-b border-gray-100'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-2'>{project.name}</h1>
          {project.category && (
            <span className='inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium'>
              {project.category}
            </span>
          )}
        </div>

        {project.image && (
          <div className='w-full h-64 sm:h-72 md:h-80 overflow-hidden'>
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        )}

        <div className='p-6 sm:p-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-5'>Project Details</h2>
          <ul className='space-y-3 mb-8'>
            {project.details.map((detail, index) => (
              <li key={index} className='flex text-gray-700'>
                <span className='mr-3 text-blue-500'>•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {project.technologies && (
            <div className='mt-6'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>Technologies Used</h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-gray-700 text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='px-6 sm:px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4'>
          <Link
            to='/projects'
            className='inline-flex items-center text-gray-700 hover:text-blue-700 font-medium transition-colors'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'></path>
            </svg>
            Back to Projects
          </Link>

          {project.demoLink && (
            <a
              href={project.demoLink}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-center font-medium transition-colors'
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
