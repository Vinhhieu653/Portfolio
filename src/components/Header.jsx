// src/components/Header.jsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Theo dõi scroll để thay đổi style của header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 bg-opacity-95 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>B</span>
            </div>
            <h1
              className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-green-400'} transition-colors duration-300`}
            >
              My Portfolio
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex space-x-8'>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative py-2 px-1 text-lg font-medium transition-all duration-300 group ${
                      location.pathname === item.path ? 'text-green-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform transition-all duration-300 ${
                        location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Improved Mobile Menu Button */}
          <button
            className='md:hidden flex items-center justify-center p-2 rounded-lg bg-gray-800 hover:bg-green-500 transition-colors duration-300 focus:outline-none'
            onClick={toggleMobileMenu}
            aria-label='Toggle menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Improved */}
        {mobileMenuOpen && (
          <nav className='md:hidden mt-4 pb-4 bg-gray-800 bg-opacity-95 rounded-lg shadow-lg border border-gray-700'>
            <ul className='flex flex-col'>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 transition-colors ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium'
                        : 'text-white hover:bg-gray-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
