import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-4 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">© {new Date().getFullYear()} SoftSell</p>
        <p>Built by Janakiram Kusu</p>
      </div>
    </footer>
  );
};

export default Footer;
