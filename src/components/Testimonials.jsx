import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Samantha Lee',
    role: 'IT Manager',
    company: 'TechNova Corp',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    message:
      'SoftSell made it incredibly easy to monetize our unused software licenses. Fast, secure, and super professional!',
  },
  {
    name: 'Raj Mehta',
    role: 'Procurement Head',
    company: 'CodeCraft Ltd',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    message:
      'I was skeptical at first, but the process was smooth and the payout was quick. Highly recommended!',
  },
];

const Testimonials = ({ darkMode }) => {
  return (
    <section
      className={`py-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-colors duration-500`}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className={`${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                } p-8 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-blue-600"
                />
                <FaQuoteLeft
                  className={`text-3xl mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}
                />
                <p
                  className={`text-lg italic mb-6 max-w-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  “{t.message}”
                </p>
                <h5 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t.name}
                </h5>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.role}, {t.company}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
