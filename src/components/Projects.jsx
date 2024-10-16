// src/components/Projects.jsx
import { motion } from 'framer-motion';
import ecommerce from '../assets/ecommerce.png';
import milk from '../assets/milk-store.png';

const projects = [
    { name: 'MILKSTORE PROJECT', description: 'React JS, MongoDB, Express, Node JS', link: 'https://github.com/Vinhhieu653/milk-store.git', image: milk },
    { name: 'E-COMMERCE PROJECT', description: 'React JS, MongoDB, Express, Node JS', link: 'https://github.com/Vinhhieu653/E-Commerce.git', image: ecommerce },
];

function Projects() {
    return (
        <div className="max-w-6xl mx-auto py-20 px-4 bg-gray-900">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }} // Hiệu ứng xuất hiện
                        animate={{ opacity: 1, y: 0 }} // Hiệu ứng hoàn thành
                        transition={{ duration: 0.4 }} // Thời gian chuyển tiếp
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
                    >
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank" // Mở liên kết trong tab mới
                            rel="noopener noreferrer" // An toàn khi mở liên kết
                            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300"
                        >
                            GO TO REPOSITORY
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
