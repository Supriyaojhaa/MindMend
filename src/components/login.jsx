// import React, { useState } from 'react';

// const Login = () => {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!form.email || !form.password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     // TODO: Add actual login logic here (API call, etc.)
//     alert(`Logging in with\nEmail: ${form.email}\nPassword: ${form.password}`);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-[#B3DDF2] px-4">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold text-center mb-6 text-rose-500">Login to MindMend</h2>

//         {error && (
//           <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
//               placeholder="you@example.com"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block mb-1 font-medium">Password</label>
//             <input
//               id="password"
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-400"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded font-semibold transition"
//           >
//             Log In
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;
