// Home.jsx
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from '../assets/img.jpg'
import React from 'react'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

const stats = [
  { label: 'Years of experience', value: 1 + '+' },
  { label: 'Projects completed', value: 3 },
  { label: 'Technologies', value: 10 + '+' },
  { label: 'Code commits', value: 30 + '+' }
]

function CountUp({ targetValue }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (typeof targetValue !== 'number') return
    let start = 0
    const duration = 2000
    const increment = targetValue / (duration / 50)

    const interval = setInterval(() => {
      start += increment
      if (start >= targetValue) {
        setCount(targetValue)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 50)

    return () => clearInterval(interval)
  }, [targetValue])

  return (
    <motion.h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse'>
      {typeof targetValue === 'number' ? count : targetValue}
    </motion.h3>
  )
}

CountUp.propTypes = {
  targetValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

function Home() {
  return (
    <motion.div
      className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white text-center px-4'
      variants={staggerContainer}
      initial='hidden'
      animate='show'
    >
      <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mb-8'>
        <motion.div className='md:w-1/2 text-left mb-8 md:mb-0' variants={fadeIn}>
          <h2 className='text-xl md:text-2xl font-bold mb-2 text-green-400'>Frontend Developer</h2>
          <h1 className='text-4xl md:text-6xl font-extrabold mb-4 animate-text-glow'>Hello, I’m</h1>
          <h1 className='text-4xl md:text-6xl font-extrabold text-green-500 mb-4 animate-text-glow'>Collin</h1>
          <p className='max-w-md md:max-w-2xl mb-8 text-sm md:text-base text-gray-300'>
            I am eager to learn and grow in the field of software development, with foundational skills in various
            programming languages and technologies.
          </p>

          <div className='flex gap-4'>
            <a
              href='https://www.topcv.vn/xem-cv/B1VUAVkEAwUFUAZXVQZZUlBcBQFTBwRUUVMMXAed2c'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 border border-green-400 rounded-full text-green-400 hover:bg-green-400 hover:text-black transition'
            >
              View My CV
            </a>

            <a
              href='https://github.com/Vinhhieu653'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 border border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-black transition'
            >
              GitHub
            </a>

            <a
              href='https://www.linkedin.com/in/duonghieu653/' // thay link của bạn vô
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-2 border border-blue-400 rounded-full text-blue-400 hover:bg-blue-400 hover:text-black transition'
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.img
          variants={fadeIn}
          src={Image}
          alt='Hiếu Avatar'
          className='w-32 h-32 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] rounded-full mb-4 md:ml-8 border-8 border-green-500 shadow-2xl hover:scale-110 transition duration-500 animate-border-glow'
        />
      </div>

      <motion.div className='grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-10 mt-6' variants={fadeIn}>
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col items-center'>
            <CountUp targetValue={stat.value} />
            <p className='text-gray-400 text-sm md:text-base'>{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Home
