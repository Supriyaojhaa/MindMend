// import React, { useState } from 'react';

// const Chatbot = ({ onClose }) => {
//   const [messages, setMessages] = useState([
//     { from: 'bot', text: 'Hi! I’m MindMend’s assistant. Would you like help finding a therapist?' }
//   ]);
//   const [input, setInput] = useState('');

//   const suggestions = [
//     "I'm feeling anxious",
//     "I want to talk to a therapist",
//     "I feel sad",
//     "I need help managing stress",
//     "How do I book an appointment?"
//   ];
// const handleSend = async (customMessage) => {
//   const userInput = customMessage || input;
//   if (!userInput.trim()) return;

//   const newMessage = { from: 'user', text: userInput };
//   setMessages(prev => [...prev, newMessage]);
//   setInput('');

//   try {
//     const res = await fetch("http://localhost:5000/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: userInput })
//     });

//     const data = await res.json();
//     const botReply = { from: 'bot', text: data.reply || "Sorry, I couldn't understand that." };

//     setMessages(prev => [...prev, botReply]);
//   } catch (err) {
//     setMessages(prev => [...prev, { from: 'bot', text: "Something went wrong. Please try again later." }]);
//   }
// };

//   return (
//     <div className="fixed bottom-20 right-6 w-80 bg-white border rounded-lg shadow-xl p-4 z-50">
//       <div className="flex justify-between items-center mb-2">
//         <h4 className="font-bold text-rose-400">MindMend Chat</h4>
//         <button onClick={onClose} className="text-gray-500 text-sm">✖</button>
//       </div>
//       <div className="h-60 overflow-y-auto space-y-2 mb-2">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`text-sm p-2 rounded ${msg.from === 'bot' ? ' text-left text-blue-500' : 'text-rose-500 text-right'}`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           className="flex-grow border p-1 rounded-l placeholder-rose-300 text-red-400"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type something..."
//         />
//         <button onClick={handleSend} className="bg-rose-400 text-white px-3 rounded-r">Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;


import React, { useState } from 'react';

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi! I’m MindMend’s assistant. Would you like help finding a therapist?',
    },
  ]);
  const [input, setInput] = useState('');

  const suggestions = [
    "I'm feeling anxious",
    'I want to talk to a therapist',
    'I feel sad',
    'I need help managing stress',
    'How do I book an appointment?',
  ];

  const handleSend = async (customMessage) => {
    const userInput = customMessage || input;
    if (!userInput.trim()) return;

    const newMessage = { from: 'user', text: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();
      const botReply = {
        from: 'bot',
        text: data.reply || 'Sorry, I could not understand that.',
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Something went wrong. Please try again later.' },
      ]);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white border rounded-lg shadow-xl p-4 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-rose-400">MindMend Chat</h4>
        <button onClick={onClose} className="text-gray-500 text-sm">
          ✖
        </button>
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 mb-3">
        {suggestions.map((text, idx) => (
          <button
            key={idx}
            className="bg-rose-100 hover:bg-rose-200 text-sm text-rose-600 px-3 py-1 rounded-full transition-all"
            onClick={() => handleSend(text)}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Chat messages */}
      <div className="h-60 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded max-w-[90%] ${
              msg.from === 'bot'
                ? 'bg-rose-100 text-left text-gray-800'
                : 'bg-blue-100 text-right self-end text-gray-700 ml-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="flex">
        <input
          className="flex-grow border p-1 rounded-l placeholder-rose-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
        />
        <button
          onClick={() => handleSend()}
          className="bg-rose-400 text-white px-3 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
