import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TherapistLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login check – replace with real auth later
    if (email === 'therapist@example.com' && password === '123456') {
      alert('Login successful');
      navigate('/therapistDashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className="min-h-screen bg-[#B3DDF2] flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-rose-400 mb-6 text-center font-secondary">
          Therapist Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="therapist@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-3 rounded-md font-medium hover:bg-rose-500 transition-colors"
          >
            Login as Therapist
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Not a therapist?{' '}
          <a href="/login" className="text-rose-400 hover:underline">
            Login as User
          </a>
        </p>
      </div>
    </section>
  );
};

export default TherapistLogin;
