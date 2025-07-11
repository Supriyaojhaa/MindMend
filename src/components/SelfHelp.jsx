import React from 'react';

const SelfHelp = () => {
  return (
    <section id="selfhelp" className="py-12 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-rose-400 mb-6">
        Self-Help Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">📚 Recommended Books</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>Feeling Good</strong> by Dr. David Burns – For depression and negative thinking</li>
            <li><strong>The Anxiety and Phobia Workbook</strong> by Edmund Bourne – Anxiety toolkit</li>
            <li><strong>Atomic Habits</strong> by James Clear – Habit building and motivation</li>
            <li><strong>The Power of Now</strong> by Eckhart Tolle - Living fully in present</li>
            <li><strong>The 7 Habits of Highly Effective People</strong> by Stephen R. Covey - Principles for personal success</li>
            <li><strong>How to Win Friends and Influence People</strong> by Dale Carnegie - Building strong relationships</li>
            <li><strong>You Are a Badass </strong> by Jen Sincero - Boost confidence, self-love</li>
            <li><strong>The Subtle Art of Not Giving a F*ck </strong> by Mark Manson - Prioritize what matters</li>
            <li><strong>Awaken the Giant Within</strong> by Tony Robbins - Personal empowerment techniques</li>
            <li><strong>Feel the Fear and Do It Anyway</strong> by Susan Jeffers - Overcoming fear, taking action</li>
            <li><strong>Man’s Search for Meaning</strong> by Viktor E. Frankl - Finding purpose through suffering</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">🎥 Recommended Videos</h3>
          <ul className="space-y-3 text-sm text-rose-700 underline">
            <li><a href="https://www.youtube.com/watch?v=7kOKD1ZUGJc" target="_blank" rel="noreferrer">Guided Meditation for Anxiety (10 min)</a></li>
            <li><a href="https://www.youtube.com/watch?v=EJxkNiN1aHk" target="_blank" rel="noreferrer">How to Stop Overthinking</a></li>
            <li><a href="https://www.youtube.com/watch?v=ZToicYcHIOU" target="_blank" rel="noreferrer">5-Minute Stress Relief Techniques</a></li>
            <li><a href="https://www.youtube.com/watch?v=pvRqHviEk80" target="_blank" rel="noreferrer">Wim Hof Breathing Method – 3 Round Guided Session</a></li>
            <li><a href="https://www.youtube.com/watch?v=CJfdFOfsi80" target="_blank" rel="noreferrer">7 Ways to Improve Your Mental Health</a></li>
            <li><a href="https://www.youtube.com/watch?v=Vh_8EpNu5fE" target="_blank" rel="noreferrer">How to Handle Stress at Work (and in Life) | 7 Tips to Stop Burnout</a></li>
            <li><a href="https://www.youtube.com/watch?v=7XFLTDQ4JMk" target="_blank" rel="noreferrer">How to Cope with Depression | Mental Health Tips</a></li>
            <li><a href="https://www.youtube.com/watch?v=BEhksY-DO1o" target="_blank" rel="noreferrer">Work Life Balance - How to Balance Between Work and Your Personal Life</a></li>
            <li><a href="https://www.youtube.com/watch?v=nHLZLUrM4NA" target="_blank" rel="noreferrer"></a>5 Powerful Tips to Overcome Depression Naturally</li>
            <li><a href="https://www.youtube.com/watch?v=Gg8Q9vqWBRw" target="_blank" rel="noreferrer">Mastering Work-Life Balance: How to Set and Prioritize Personal and Professional Goals</a></li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default SelfHelp;
