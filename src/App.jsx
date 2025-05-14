import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    console.log('Dark mode changed:', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <main className={`transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section id="home" className="section">
        <Hero darkMode={darkMode} />
      </section>

      <section id="how-it-works" className="section">
        <HowItWorks darkMode={darkMode} />
      </section>

      <section id="why-choose-us" className="section">
        <WhyChooseUs darkMode={darkMode} />
      </section>

      <section id="testimonials" className="section">
        <Testimonials darkMode={darkMode} />
      </section>

      <section id="contact" className="section">
        <ContactForm darkMode={darkMode} />
      </section>

      <ChatBot darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  );
}

export default App;
