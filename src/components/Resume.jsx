// src/components/Resume.jsx
import { useState } from 'react';

function Resume() {
    const [activeSection, setActiveSection] = useState('Experience'); // Đặt giá trị khởi tạo là "Experience"

    const handleButtonClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="max-w-6xl mx-auto py-20 px-4 bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">Why hire me?</h1>
            <p className="mb-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>

            <div className="flex justify-center mb-10">
                {['Experience', 'Education', 'Skills', 'About me'].map((button) => (
                    <button
                        key={button}
                        className={`px-4 py-2 mx-2 rounded-lg ${activeSection === button ? 'bg-green-500' : 'bg-gray-800'} text-white`}
                        onClick={() => handleButtonClick(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>

            {activeSection === 'Experience' && (
                <div>
                    <h2 className="text-3xl font-semibold mb-4">My Experience</h2>
                    <h3 className="text-2xl font-bold mb-2">Personal Projects</h3>
                    <ul className="list-disc ml-5">
                        <li className="mt-4">
                            <strong>E-Commerce Project</strong><br />
                            <ul className="list-inside list-disc">
                                <li>Developed for e-commerce purposes, targeting customers who want to shop online.</li>
                                <li>Using ReactJS and Tailwind CSS for the frontend, MongoDB for the database, and Express with Node.js for the backend.</li>
                                <li>Implemented an MVC structure to control and develop the application.</li>
                                <li>Designed to be intuitive, ensuring that customers can quickly get accustomed to the shopping process.</li>
                            </ul>
                        </li>
                        <li className="mt-4">
                            <strong>Milk Store</strong><br />
                            <ul className="list-inside list-disc">
                                <li>Developed for people who want to buy milk but do not have time to go outside, allowing them to purchase it conveniently.</li>
                                <li>Using ReactJS and Tailwind CSS for the frontend, MongoDB for the database, and Express with Node.js for the backend.</li>
                                <li>Implemented an MVC structure to control and develop the application.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}

            {activeSection === 'Education' && (
                <div>
                    <h2 className="text-3xl font-semibold mb-4">My Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">2021-Now</h3>
                            <h4 className="font-semibold">SOFTWARE ENGINEERING</h4>
                            <p className="text-gray-400">FPT University HCM</p>
                        </div>

                    </div>
                </div>
            )}

            {activeSection === 'Skills' && (
                <div>
                    <h2 className="text-3xl font-semibold mb-4">My Skills</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 mr-2" />
                            <span className="text-white">HTML</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10 mr-2" />
                            <span className="text-white">CSS</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 mr-2" />
                            <span className="text-white">JavaScript</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" className="w-10 h-10 mr-2" />
                            <span className="text-white">ReactJS</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="w-10 h-10 mr-2" />
                            <span className="text-white">Node JS</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="ExpressJS" className="w-10 h-10 mr-2" />
                            <span className="text-white">Express JS</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 mr-2" />
                            <span className="text-white">MongoDB</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 mr-2" />
                            <span className="text-white">MySQL</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10 mr-2" />
                            <span className="text-white">Git</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-10 h-10 mr-2" />
                            <span className="text-white">GitHub</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-10 h-10 mr-2" />
                            <span className="text-white">Bootstrap</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-10 h-10 mr-2" />
                            <span className="text-white">Tailwind CSS</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="MUI" className="w-10 h-10 mr-2" />
                            <span className="text-white">MUI</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SCSS" className="w-10 h-10 mr-2" />
                            <span className="text-white">SCSS</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10 mr-2" />
                            <span className="text-white">Java (basic)</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="JSP/Servlet" className="w-10 h-10 mr-2" />
                            <span className="text-white">JSP/Servlet (basic)</span>
                        </div>
                    </div>
                </div>

            )}

            {activeSection === 'About me' && (
                <div>
                    <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                    <p>
                        I am a fourth-year student specializing in software engineering. I love building web applications and exploring new technologies.
                    </p>

                    <h2 className="text-3xl font-semibold mb-4 mt-8">Soft Skills</h2>
                    <ul className="list-disc ml-5">
                        <li>Teamwork</li>
                        <li>Communication skills</li>
                        <li>Flexibility</li>
                    </ul>

                    <h2 className="text-3xl font-semibold mb-4 mt-8">Languages</h2>
                    <ul className="list-disc ml-5">
                        <li>English</li>
                        <li>Japanese (basic)</li>
                    </ul>
                </div>

            )}
        </div>
    );
}

export default Resume;
