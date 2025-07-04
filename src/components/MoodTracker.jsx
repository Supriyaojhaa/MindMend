// import React from 'react'

// const MoodTracker = () => {
//   return (
//     <div id="moodtracker" className='h-screen bg-red-100'>MoodTracker</div>
//   )
// }

// export default MoodTracker

import React, { useState, useEffect } from 'react';

const moods = [
  { label: 'Happy', emoji: '😊', suggestion: "Great to hear you're happy! Keep spreading the positivity." },
  { label: 'Sad', emoji: '😢', suggestion: "It's okay to feel sad. Take some time for self-care and reach out if needed." },
  { label: 'Angry', emoji: '😡', suggestion: "Try some deep breathing or a short walk to calm down." },
  { label: 'Excited', emoji: '🤩', suggestion: "Channel that excitement into something creative or productive!" },
  { label: 'Anxious', emoji: '😰', suggestion: "Try grounding exercises or mindfulness to ease anxiety." },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [history, setHistory] = useState([]);
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('mood-history')) || [];
    setHistory(stored);
  }, []);

  const handleSubmit = () => {
    if (!selectedMood) return;

    const moodData = moods.find(m => m.label === selectedMood);
    setSuggestion(moodData ? moodData.suggestion : '');

    const entry = {
      mood: selectedMood,
      date: new Date().toLocaleDateString(),
    };
    const updated = [entry, ...history];
    localStorage.setItem('mood-history', JSON.stringify(updated));
    setHistory(updated);
    setSelectedMood(null);
  };

  return (
    <section id="moodtracker" className="min-h-screen pt-32 pb-16 bg-[#F8F9FA] px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-rose-500">Mood Tracker</h2>

        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(mood.label)}
              className={`text-3xl px-4 py-2 rounded-full ${
                selectedMood === mood.label ? 'bg-rose-200' : 'bg-white'
              }`}
            >
              {mood.emoji}
              <div className="text-sm">{mood.label}</div>
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-rose-400 text-white px-6 py-2 rounded hover:bg-rose-500"
          disabled={!selectedMood}
        >
          Submit Mood
        </button>

        {suggestion && (
          <div className="mt-6 p-4 bg-rose-100 rounded text-rose-700 font-medium">
            <strong>Suggestion:</strong> {suggestion}
          </div>
        )}

        <div className="mt-8 text-left">
          <h3 className="text-xl font-semibold mb-2 text-rose-400">Mood History</h3>
          <ul className="space-y-2">
            {history.map((entry, index) => (
              <li key={index} className="bg-white rounded p-3 shadow">
                <span className="font-bold">{entry.date}</span>: {entry.mood}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MoodTracker;
