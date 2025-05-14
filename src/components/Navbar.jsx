import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaCogs,
  FaCheckCircle,
  FaUsers,
  FaEnvelope,
  FaLaptopCode,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const navLinks = [
    { href: '#home', label: 'Home', icon: <FaHome className="inline mr-2" /> },
    { href: '#how-it-works', label: 'How It Works', icon: <FaCogs className="inline mr-2" /> },
    { href: '#why-choose-us', label: 'Why Us', icon: <FaCheckCircle className="inline mr-2" /> },
    { href: '#testimonials', label: 'Testimonials', icon: <FaUsers className="inline mr-2" /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope className="inline mr-2" /> },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold flex items-center gap-2">
          <FaLaptopCode className="text-blue-600" />
          <span>SoftSell</span>
        </a>


        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden lg:flex items-center ml-auto space-x-6 font-medium">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center hover:text-blue-600 transition-colors duration-300"
                >
                  {link.icon}
                  <span className="ml-1">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 hover:text-blue-600 transition duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>
      </div>

     <div
  className={`lg:hidden transition-all duration-300 origin-top ${
    menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  } ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-md`}
>
  <ul className="flex flex-col items-center text-center space-y-4 p-4 font-medium">
    {navLinks.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          onClick={closeMenu}
          className="flex items-center justify-center hover:text-blue-600 transition-colors duration-300"
        >
          {link.icon} {link.label}
        </a>
      </li>
    ))}
    <li>
      <button
        onClick={() => {
          toggleDarkMode();
          closeMenu();
        }}
        className="flex items-center gap-2 hover:text-blue-600 transition duration-300"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
        <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
      </button>
    </li>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;
