// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

    return (
        <header className="bg-gray-800 p-4 shadow">
            <nav className="flex justify-between">
                <h1 className="text-2xl font-bold text-green-400">My Portfolio</h1> {/* Đổi màu tiêu đề */}
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className={`text-white hover:text-green-400 ${location.pathname === '/' ? 'text-green-400 border-b-2 border-green-400 font-semibold' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={`text-white hover:text-green-400 ${location.pathname === '/projects' ? 'text-green-400 border-b-2 border-green-400 font-semibold' : ''}`}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            className={`text-white hover:text-green-400 ${location.pathname === '/resume' ? 'text-green-400 border-b-2 border-green-400 font-semibold' : ''}`}
                        >
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`text-white hover:text-green-400 ${location.pathname === '/contact' ? 'text-green-400 border-b-2 border-green-400 font-semibold' : ''}`}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
