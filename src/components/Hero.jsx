import React from 'react';
import { FaUpload } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <section
      className={`w-full min-h-screen flex flex-col justify-center items-center text-center px-4 
        bg-gradient-to-br from-blue-600 to-purple-700 text-white
        ${darkMode ? 'from-gray-900 to-black text-gray-100' : 'from-blue-600 to-purple-700 text-white'}
        transition-colors duration-500`}
    >
      <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-white'}`}>
        Sell Your Unused Software Licenses
      </h1>
      <p className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
        Get instant quotes, maximize value, and get paid fast.
      </p>
      <button
        className={`font-semibold py-2 px-6 rounded-full 
          ${darkMode
            ? 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg'
            : 'bg-white text-blue-600 hover:bg-blue-100 hover:shadow-lg'}
          transition-all duration-300 flex items-center justify-center space-x-2`}
        onClick={() => document.getElementById('file-upload').click()}  // Trigger file input click
      >
        <FaUpload className="text-blue-600" size={16} />
        <span>Sell My Licenses</span>

        <input
          id="file-upload"
          type="file"
          className="hidden"  
          onChange={handleFileUpload}
        />
      </button>
    </section>
  );
};

export default Hero;
