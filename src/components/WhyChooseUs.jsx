import React from 'react';
import { ShieldCheckIcon, ClockIcon, CheckBadgeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-500" />,
    title: 'Secure & Trusted',
    description: 'We ensure secure transactions and protect your data at every step.',
  },
  {
    icon: <ClockIcon className="h-10 w-10 text-green-500" />,
    title: 'Quick Process',
    description: 'Get valuations and payments within hours, not days.',
  },
  {
    icon: <CheckBadgeIcon className="h-10 w-10 text-purple-500" />,
    title: 'Verified Buyers',
    description: 'We match your license with trusted, verified corporate buyers.',
  },
  {
    icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-yellow-500" />,
    title: 'Dedicated Support',
    description: 'Need help? Our team is always ready to assist you with your queries.',
  },
];

const WhyChooseUs = ({ darkMode }) => {
  return (
    <section className={`py-16 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          Why Choose Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform duration-300 
                ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-900'}
                ${darkMode ? 'border-gray-700' : 'border-gray-200'}
              `}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
