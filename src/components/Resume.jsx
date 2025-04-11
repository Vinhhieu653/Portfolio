import { useState } from 'react'
import React from 'react'

function Resume() {
  const [activeSection, setActiveSection] = useState('Experience')

  const handleButtonClick = (section) => {
    setActiveSection(section)
  }

  const sections = ['Experience', 'Education', 'Certificates', 'Skills', 'About me']

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Why hire me?
          </h1>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Software Engineering Student with strong fundamentals in web development
          </p>
        </div>

        {/* Navigation */}
        <div className='flex flex-wrap justify-center mb-12 gap-3'>
          {sections.map((section) => (
            <button
              key={section}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => handleButtonClick(section)}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Content Container with animation */}
        <div className='bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 animate-fadeIn'>
          {activeSection === 'Experience' && (
            <div className='space-y-8'>
              <div className='border-b border-gray-700 pb-4'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6 flex items-center'>
                  <span className='text-green-400 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </span>
                  Professional Experience
                </h2>
              </div>

              <div className='relative pl-8 border-l-2 border-green-400'>
                <div className='absolute -left-3 top-0 h-6 w-6 rounded-full bg-green-400 flex items-center justify-center'>
                  <div className='h-3 w-3 rounded-full bg-gray-800'></div>
                </div>
                <div className='mb-8'>
                  <h3 className='text-xl font-bold text-green-400 mb-1'>Software Engineering Intern</h3>
                  <p className='text-gray-400 mb-2 flex items-center'>
                    <span className='mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                        />
                      </svg>
                    </span>
                    FPT Software
                  </p>
                  <p className='text-gray-400 mb-4 flex items-center'>
                    <span className='mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                    </span>
                    ~ 4 months
                  </p>

                  <div className='bg-gray-700 bg-opacity-50 rounded-lg p-4'>
                    <ul className='space-y-3'>
                      {[
                        'Developed backend services using NestJS, building RESTful APIs and server-side logic',
                        'Optimized authentication flows and database interactions for performance',
                        'Collaborated with frontend team using Next.js to ensure seamless API integration',
                        'Participated in Agile methodologies with daily stand-ups and sprint planning',
                        'Improved system architecture and backend service optimization',
                        'Gained deep experience in server-side development workflows'
                      ].map((item, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='text-green-400 mr-2 mt-1'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-4 w-4'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'Education' && (
            <div className='space-y-8'>
              <div className='border-b border-gray-700 pb-4'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6 flex items-center'>
                  <span className='text-green-400 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M12 14l9-5-9-5-9 5 9 5z' />
                      <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                      />
                    </svg>
                  </span>
                  Education
                </h2>
              </div>

              <div className='bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105'>
                <div className='flex flex-col md:flex-row md:items-center'>
                  <div className='bg-green-400 rounded-full h-16 w-16 flex items-center justify-center mb-4 md:mb-0 md:mr-6'>
                    <span className='font-bold text-gray-800'>FPT</span>
                  </div>
                  <div>
                    <div className='text-gray-400 text-sm mb-1'>2021 - Present</div>
                    <h3 className='text-xl font-bold text-green-400 mb-1'>SOFTWARE ENGINEERING</h3>
                    <p className='text-white'>FPT University HCM</p>
                    <div className='mt-4 pt-4 border-t border-gray-700'>
                      <p className='text-gray-300'>
                        Focusing on web development and software engineering fundamentals with hands-on project
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'Certificates' && (
            <div className='space-y-8'>
              <div className='border-b border-gray-700 pb-4'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6 flex items-center'>
                  <span className='text-green-400 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                      />
                    </svg>
                  </span>
                  Certificates
                </h2>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[
                  {
                    name: 'CertNexus Certified Ethical Emerging Technologist',
                    link: 'https://coursera.org/share/ae2a460404cf3da176ac093de85ec85a',
                    icon: '🔒'
                  },
                  {
                    name: 'Software Development Lifecycle',
                    link: 'https://coursera.org/share/d8a617aba9b3544ee305da140cef6c17',
                    icon: '🔄'
                  },
                  {
                    name: 'Web Design for Everybody: Basics of Web Development & Coding',
                    link: 'https://coursera.org/share/afa715fd77d3bd55630fc347a4d5ca9c',
                    icon: '🌐'
                  },
                  {
                    name: 'Computer Communications',
                    link: 'https://coursera.org/share/70dc5d1130e2f9e3976b0e596dd99078',
                    icon: '💻'
                  },
                  {
                    name: 'Academic Skills for University Success',
                    link: 'https://coursera.org/share/970a02ca7244a08c224b20a3e7118750',
                    icon: '📚'
                  },
                  {
                    name: 'Academic English: Writing',
                    link: 'https://coursera.org/share/ee50dde0a3b0c6b034042350e441af68',
                    icon: '✍️'
                  }
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className='bg-gray-700 bg-opacity-50 rounded-lg p-5 hover:bg-gray-600 transition duration-300 transform hover:scale-105'
                  >
                    <div className='flex items-start'>
                      <div className='text-3xl mr-4'>{cert.icon}</div>
                      <div>
                        <h3 className='text-lg font-semibold text-white mb-2'>{cert.name}</h3>
                        <a
                          href={cert.link}
                          className='inline-flex items-center text-green-400 hover:text-green-300 transition'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <span>View Certificate</span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4 ml-1'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'Skills' && (
            <div className='space-y-8'>
              <div className='border-b border-gray-700 pb-4'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6 flex items-center'>
                  <span className='text-green-400 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </span>
                  Technical Skills
                </h2>
              </div>

              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {[
                  {
                    category: 'Frontend',
                    skills: [
                      { name: 'HTML', iconClass: 'devicon-html5-plain colored' },
                      { name: 'CSS', iconClass: 'devicon-css3-plain colored' },
                      { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
                      { name: 'ReactJS', iconClass: 'devicon-react-original colored' },
                      { name: 'Bootstrap', iconClass: 'devicon-bootstrap-plain colored' },
                      { name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-plain colored' },
                      { name: 'MUI', iconClass: 'devicon-materialui-plain colored' },
                      { name: 'SCSS', iconClass: 'devicon-sass-original colored' }
                    ]
                  },
                  {
                    category: 'Backend',
                    skills: [
                      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
                      { name: 'Express.js', iconClass: 'devicon-express-original' },
                      { name: 'Java', iconClass: 'devicon-java-plain colored' },
                      { name: 'JSP/Servlet', iconClass: 'devicon-java-plain colored' },
                      { name: 'NestJS', iconClass: 'devicon-nestjs-plain colored' }
                    ]
                  },
                  {
                    category: 'Database',
                    skills: [
                      { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
                      { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
                      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' }
                    ]
                  },
                  {
                    category: 'Tools & Others',
                    skills: [
                      { name: 'Git', iconClass: 'devicon-git-plain colored' },
                      { name: 'GitHub', iconClass: 'devicon-github-original' },
                      { name: 'GitLab', iconClass: 'devicon-gitlab-plain colored' },
                      { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
                      { name: 'Swagger', iconClass: 'devicon-swagger-plain' }
                    ]
                  }
                ].map((group) => (
                  <div key={group.category} className='bg-gray-700 bg-opacity-50 rounded-lg p-5 col-span-2'>
                    <h3 className='text-lg font-semibold text-green-400 mb-4'>{group.category}</h3>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className='flex flex-col items-center transform transition hover:scale-110'
                        >
                          <div className='w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-2'>
                            <i className={`${skill.iconClass} text-2xl`}></i>
                          </div>
                          <span className='text-center text-sm'>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'About me' && (
            <div className='space-y-8'>
              <div className='border-b border-gray-700 pb-4'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6 flex items-center'>
                  <span className='text-green-400 mr-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </span>
                  About Me
                </h2>
              </div>

              <div className='bg-gray-700 bg-opacity-50 rounded-lg p-6'>
                <p className='text-lg text-gray-300 leading-relaxed mb-8'>
                  I am a fourth-year student specializing in software engineering with a passion for web development. I
                  enjoy building applications that solve real-world problems and constantly exploring new technologies
                  to expand my skillset.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div>
                    <h3 className='text-xl font-semibold text-green-400 mb-4 flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 mr-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                        />
                      </svg>
                      Soft Skills
                    </h3>
                    <div className='space-y-3'>
                      {['Teamwork', 'Communication', 'Flexibility', 'Problem Solving', 'Time Management'].map(
                        (skill) => (
                          <div key={skill} className='flex items-center'>
                            <div className='mr-3 text-green-400'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                              </svg>
                            </div>
                            <span>{skill}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-semibold text-green-400 mb-4 flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 mr-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
                        />
                      </svg>
                      Languages
                    </h3>
                    <div className='space-y-4'>
                      {[
                        {
                          name: 'English',
                          flag: 'https://flagcdn.com/w40/gb.png',
                          alt: 'UK Flag'
                        },
                        {
                          name: 'Japanese',
                          flag: 'https://flagcdn.com/w40/jp.png',
                          alt: 'Japan Flag',
                          level: 'Basic'
                        }
                      ].map((language) => (
                        <div key={language.name} className='flex items-center'>
                          <div className='mr-3'>
                            <img src={language.flag} alt={language.alt} className='w-8 h-auto rounded shadow-sm' />
                          </div>
                          <div>
                            <div className='font-medium'>{language.name}</div>
                            {language.level && <div className='text-sm text-gray-400'>{language.level}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resume
