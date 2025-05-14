import React from 'react';
import { CloudArrowUpIcon, CurrencyDollarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Upload License',
    icon: <CloudArrowUpIcon className="h-12 w-12 text-blue-500" />,
    description: 'Submit your unused software license securely through our platform.',
  },
  {
    title: 'Get Valuation',
    icon: <ClipboardDocumentCheckIcon className="h-12 w-12 text-green-500" />,
    description: 'We’ll assess your license value and give you a fair quote instantly.',
  },
  {
    title: 'Get Paid',
    icon: <CurrencyDollarIcon className="h-12 w-12 text-yellow-500" />,
    description: 'Accept the quote and receive payment directly to your account.',
  },
];

const HowItWorks = ({ darkMode }) => {
  return (
    <section className={`py-16 transition-colors duration-500 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className={`text-3xl font-extrabold mb-12 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
          How It Works
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transition-transform hover:scale-105 transform duration-300 
                ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'} 
                ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
