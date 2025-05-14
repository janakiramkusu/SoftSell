import React, { useState } from 'react';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, company, licenseType, message } = formData;

    if (!name || !email || !company || !licenseType || !message) {
      alert('Please fill in all fields.');
      return;
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className={`p-8 rounded-xl shadow-md space-y-6 transition-all duration-300 ${
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Janakiram"
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? 'border-gray-600 bg-gray-800 text-white'
                    : 'border-gray-300 bg-gray-50 text-gray-900'
                }`}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? 'border-gray-600 bg-gray-800 text-white'
                    : 'border-gray-300 bg-gray-50 text-gray-900'
                }`}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="xyz Ltd"
              className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? 'border-gray-600 bg-gray-800 text-white'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? 'border-gray-600 bg-gray-800 text-white'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
              required
            >
              <option value="">-- Select --</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="AutoCAD">AutoCAD</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className={`text-sm mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Your Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? 'border-gray-600 bg-gray-800 text-white'
                  : 'border-gray-300 bg-gray-50 text-gray-900'
              }`}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3  text-white font-semibold rounded-md transition-colors duration-300 ${
              darkMode
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-blue-600 hover:bg-blue-800'
            }`}
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-500 text-center mt-3 animate-pulse">
              ✅ Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
