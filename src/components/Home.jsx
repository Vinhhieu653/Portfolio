// src/components/Home.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../assets/img.jpg';

const stats = [
    { label: 'Years of experience', value: 2 },
    { label: 'Projects completed', value: 3 },
    { label: 'Technologies', value: 5 },
    { label: 'Code commits', value: 10 },
];

function CountUp({ targetValue }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 100);

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
                setCount(targetValue);
                clearInterval(interval);
            } else {
                setCount(Math.floor(start));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [targetValue]);

    return <motion.h3 className="text-4xl font-bold">{count}</motion.h3>;
}

CountUp.propTypes = {
    targetValue: PropTypes.number.isRequired,
};

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-8">
                <div className="md:w-1/2 text-left mb-8 md:mb-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Frontend Developer</h2>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hello, I’m</h1>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-green-500 mb-4">Collin</h1>
                    <p className="max-w-md md:max-w-2xl mb-8 text-sm md:text-base whitespace-normal overflow-hidden overflow-ellipsis">
                        I am eager to learn and grow in the field of software development, with foundational skills in various programming languages and technologies.
                    </p>
                    <div className="flex items-center mb-10">
                        <a
                            href="https://www.topcv.vn/xem-cv/B1VUAVkEAwUFUAZXVQZZUlBcBQFTBwRUUVMMXAed2c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 mr-4 text-sm md:text-base"
                        >
                            OPEN CV
                        </a>
                        <a
                            href="https://github.com/Vinhhieu653"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-white transition duration-300 flex items-center justify-center mr-4"
                        >
                            <i className="fab fa-github fa-lg md:fa-2x"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/duonghieu653/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-white transition duration-300 flex items-center justify-center"
                        >
                            <i className="fab fa-linkedin fa-lg md:fa-2x"></i>
                        </a>
                    </div>
                </div>
                <img
                    src={Image}
                    alt="Hình ảnh của Collin"
                    className="w-32 h-32 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full mb-4 md:ml-8 border-8 border-green-500 shadow-2xl transition-transform transform hover:scale-110"
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-10 mt-6">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <CountUp targetValue={stat.value} />
                        <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
