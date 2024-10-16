// src/components/Home.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from '../assets/img.jpg'; // Đường dẫn đến hình ảnh của bạn

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
        const duration = 2000; // Thời gian chạy số (ms)
        const increment = targetValue / (duration / 100); // Tính toán giá trị tăng lên mỗi 100ms

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
                setCount(targetValue);
                clearInterval(interval);
            } else {
                setCount(Math.floor(start));
            }
        }, 100);

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [targetValue]);

    return <motion.h3 className="text-4xl font-bold">{count}</motion.h3>;
}

// Thêm xác thực props cho CountUp
CountUp.propTypes = {
    targetValue: PropTypes.number.isRequired,
};

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4">
                <div className="md:w-1/2 text-left">
                    <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
                    <h1 className="text-6xl font-extrabold mb-4">Hello, I’m</h1>
                    <h1 className="text-6xl font-extrabold text-green-500 mb-4">Collin</h1>
                    <p className="max-w-2xl mb-8">
                        I am eager to learn and grow in the field of software development, with foundational skills in various programming languages and technologies.
                    </p>
                    <div className="flex items-center mb-10">
                        <a
                            href={'https://www.topcv.vn/xem-cv/B1VUAVkEAwUFUAZXVQZZUlBcBQFTBwRUUVMMXAed2c'} // Đường dẫn đến tệp CV của bạn
                            target="_blank" // Mở trong tab mới
                            rel="noopener noreferrer" // Bảo mật khi mở liên kết mới
                            className="px-6 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 mr-4"
                        >
                            OPEN CV
                        </a>
                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/Vinhhieu653" // Thay thế bằng link GitHub của bạn
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-white transition duration-300 flex items-center justify-center mr-4"
                        >
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/duonghieu653/" // Thay thế bằng link LinkedIn của bạn
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-white transition duration-300 flex items-center justify-center"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
                <img
                    src={Image}
                    alt="Hình ảnh của Collin"
                    className="w-96 h-96 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full mb-4 md:ml-8 border-8 border-green-500 shadow-2xl transition-transform transform hover:scale-110"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <CountUp targetValue={stat.value} />
                        <p className="text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
