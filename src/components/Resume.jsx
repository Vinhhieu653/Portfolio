import { useState } from 'react';

function Resume() {
    const [activeSection, setActiveSection] = useState('Experience');

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="max-w-full sm:max-w-6xl mx-auto py-10 sm:py-20 px-4 sm:px-6 bg-gray-900 text-white">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">Why hire me?</h1>

            <div className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-4">
                {['Experience', 'Education', 'Certificates', 'Skills', 'About me'].map((button) => (
                    <button
                        key={button}
                        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg ${activeSection === button ? 'bg-green-500' : 'bg-gray-800'
                            } text-white text-sm sm:text-base`}
                        onClick={() => handleButtonClick(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>

            {activeSection === 'Experience' && (
                <div>
                    <h2 className="text-xl sm:text-3xl font-semibold mb-4">My Experience</h2>

                    <h3 className="text-lg sm:text-2xl font-bold mb-2">Internship</h3>
                    <ul className="list-disc ml-5 text-sm sm:text-base">
                        <li className="mt-4">
                            <strong>Software Engineering Intern - FPT Software</strong><br />
                            <ul className="list-inside list-disc">
                                <li>Completed a 4-month internship at FPT Software as a Software Engineering Intern.</li>
                                <li>Worked on backend development using NestJS, gaining hands-on experience in building APIs and server-side logic.</li>
                                <li>Developed and optimized backend services, focusing on authentication, database interactions, and performance improvements.</li>
                                <li>Had exposure to Next.js for frontend development, learning how to integrate frontend with backend services efficiently.</li>
                                <li>Collaborated with backend and frontend teams to ensure smooth API integration and improve system architecture.</li>
                                <li>Focused on improving backend skills to gain deeper experience in server-side development.</li>
                                <li>Learned about Agile methodologies, participated in daily stand-up meetings, and contributed to sprint planning and reviews.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}



            {activeSection === 'Education' && (
                <div>
                    <h2 className="text-xl sm:text-3xl font-semibold mb-4">My Education</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">2021-Now</h3>
                            <h4 className="font-semibold text-sm sm:text-base">SOFTWARE ENGINEERING</h4>
                            <p className="text-gray-400 text-sm sm:text-base">FPT University HCM</p>
                        </div>
                    </div>
                </div>
            )}

            {activeSection === 'Certificates' && (
                <div>
                    <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 text-center">My Certificates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { name: "CertNexus Certified Ethical Emerging Technologist", link: "https://coursera.org/share/ae2a460404cf3da176ac093de85ec85a" },
                            { name: "Software Development Lifecycle", link: "https://coursera.org/share/d8a617aba9b3544ee305da140cef6c17" },
                            { name: "Web Design for Everybody: Basics of Web Development & Coding", link: "https://coursera.org/share/afa715fd77d3bd55630fc347a4d5ca9c" },
                            { name: "Computer Communications", link: "https://coursera.org/share/70dc5d1130e2f9e3976b0e596dd99078" },
                            { name: "Academic Skills for University Success", link: "https://coursera.org/share/970a02ca7244a08c224b20a3e7118750" },
                            { name: "Academic English: Writing", link: "https://coursera.org/share/ee50dde0a3b0c6b034042350e441af68" }
                        ].map((cert) => (
                            <div key={cert.name} className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{cert.name}</h3>
                                <a href={cert.link} className="text-green-400 hover:underline text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">View Certificate</a>
                            </div>
                        ))}
                    </div>
                </div>

            )}

            {activeSection === 'Skills' && (
                <div>
                    <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 text-center">My Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {[
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'ReactJS' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express.js' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git' },
                            { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg', name: 'GitHub' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', name: 'MUI' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', name: 'SCSS' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'JSP/Servlet' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
                            { src: 'https://nestjs.com/img/logo-small.svg', name: 'NestJS' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
                            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg', name: 'Swagger' }
                        ].map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center">
                                <img src={skill.src} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                                <span className="text-white text-xs sm:text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            )}

            {activeSection === 'About me' && (
                <div>
                    <h2 className="text-xl sm:text-3xl font-semibold mb-4">About Me</h2>
                    <p className="text-sm sm:text-base">
                        I am a fourth-year student specializing in software engineering. I love building web applications and exploring new technologies.
                    </p>

                    <h2 className="text-xl sm:text-3xl font-semibold mb-4 mt-6 sm:mt-8">Soft Skills</h2>
                    <ul className="list-disc ml-5 text-sm sm:text-base">
                        <li>Teamwork</li>
                        <li>Communication skills</li>
                        <li>Flexibility</li>
                    </ul>

                    <h2 className="text-xl sm:text-3xl font-semibold mb-4 mt-6 sm:mt-8">Languages</h2>
                    <ul className="list-disc ml-5 text-sm sm:text-base">
                        <li>English</li>
                        <li>Japanese (basic)</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Resume;