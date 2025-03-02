import { Link } from "react-router-dom";

const projects = [
    { id: 1, name: "E-Commerce Project" },
    { id: 2, name: "Milk Store" }
];

const ProjectList = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">My Experience</h2>
                <h3 className="text-lg font-bold text-gray-700 mb-4">Personal Projects</h3>
                <ul className="space-y-4">
                    {projects.map((project) => (
                        <li key={project.id} className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200">
                            <Link to={`/projects/${project.id}`} className="text-lg font-bold text-gray-900">
                                {project.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectList;
