import React,{ useState } from 'react';
import axios from 'axios';
import { MessageSquare, X } from 'lucide-react';

const exampleQuestions = [
  'How do I sell my license?',
  'What is SoftSell?',
  'How much can I earn?',
];

const ChatBot = ({darkMode}) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I can help you sell your license. Ask me anything!' },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (customInput) => {
    const userInput = customInput || input;
    if (!userInput.trim()) return;

    const userMsg = { from: 'user', text: userInput };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: userInput }] }],
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text
        || getMockReply(userInput);

      setMessages((prev) => [...prev, { from: 'bot', text: botReply.trim() }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: getMockReply(userInput) }, // fallback to mock
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getMockReply = (question) => {
    const lower = question.toLowerCase();
    if (lower.includes('sell my license')) {
      return 'To sell your license, go to your dashboard and click "List License". Follow the steps to complete your listing.';
    }
    if (lower.includes('softsell')) {
      return 'SoftSell is a platform where users can sell their unused software licenses securely and easily.';
    }
    if (lower.includes('earn')) {
      return 'Earnings depend on the software you sell. Some licenses can fetch up to 80% of the original price.';
    }
    return "I'm here to help! Try asking something like 'How do I sell my license?'";
  };

    return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div
          className={`w-80 rounded-lg shadow-lg flex flex-col overflow-hidden border transition-colors duration-500 ${
            darkMode
              ? 'bg-gray-800 text-white border-gray-700'
              : 'bg-white text-gray-900 border-gray-300'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded max-w-[80%] ${
                  msg.from === 'bot'
                    ? darkMode
                      ? 'bg-gray-700 text-left'
                      : 'bg-gray-200 text-left'
                    : 'bg-blue-500 text-white text-right ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-400 text-xs">Typing...</div>}
          </div>

          {/* Example Questions */}
          <div
            className={`px-3 py-2 flex flex-wrap gap-2 border-t text-sm ${
              darkMode
                ? 'bg-gray-900 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            {exampleQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className={`px-2 py-1 rounded hover:bg-blue-600 hover:text-white ${
                  darkMode
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div
            className={`flex border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-300'
            }`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className={`flex-grow px-3 py-2 text-sm outline-none ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-blue-600 text-white text-sm"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;