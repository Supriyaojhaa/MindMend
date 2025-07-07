import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add login logic here or form validation
    alert(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <section className="min-h-screen bg-[#B3DDF2] flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-rose-400 mb-6 text-center font-secondary">
          Login to MindMend
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
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
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-rose-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
