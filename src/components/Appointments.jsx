// import React, { useState } from 'react';

// const Appointments = () => {
//   const [form, setForm] = useState({
//     name: '',
//     therapist: '',
//     date: '',
//     time: '',
//     reason: ''
//   });

//   const therapists = ['Dr. Meera Sharma', 'Dr. Arjun Verma', 'Dr. Riya Kapoor', 'Dr. Sameer Iqbal', 'Dr. Nisha Batra', 'Dr. Karan Desai'];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Appointment booked:", form);
//     alert("Appointment booked successfully!");
//     setForm({ name: '', therapist: '', date: '', time: '', reason: '' });
//   };

//   return (
//     <section id="appointments" className="p-8 bg-[#B3DDF2] text-gray-800">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center text-rose-400">Book an Appointment</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block mb-1 font-medium">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-4 py-2"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Choose Therapist</label>
//             <select
//               name="therapist"
//               value={form.therapist}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-4 py-2"
//               required
//             >
//               <option value="">-- Select Therapist --</option>
//               {therapists.map((t, i) => (
//                 <option key={i} value={t}>{t}</option>
//               ))}
//             </select>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block mb-1 font-medium">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={form.date}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1 font-medium">Time</label>
//               <input
//                 type="time"
//                 name="time"
//                 value={form.time}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Reason for Visit</label>
//             <textarea
//               name="reason"
//               value={form.reason}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-4 py-2"
//               rows="4"
//               placeholder="Briefly describe your concern"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded font-semibold"
//           >
//             Book Appointment
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Appointments;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    therapist: '',
    date: '',
    time: '',
    reason: ''
  });

  const therapists = [
    'Dr. Meera Sharma',
    'Dr. Arjun Verma',
    'Dr. Riya Kapoor',
    'Dr. Sameer Iqbal',
    'Dr. Nisha Batra',
    'Dr. Karan Desai'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check if user is logged in
    const isLoggedIn = localStorage.getItem('userLoggedIn');

    if (!isLoggedIn) {
      alert("Please login first to book an appointment.");
      navigate('/login');
      return;
    }

    console.log("Appointment booked:", form);
    alert("Appointment booked successfully!");
    setForm({ name: '', therapist: '', date: '', time: '', reason: '' });
  };

  return (
    <section id="appointments" className="p-8 bg-[#B3DDF2] text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-rose-400">Book an Appointment</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Choose Therapist</label>
            <select
              name="therapist"
              value={form.therapist}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            >
              <option value="">-- Select Therapist --</option>
              {therapists.map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Reason for Visit</label>
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              rows="4"
              placeholder="Briefly describe your concern"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-400 hover:bg-rose-500 text-white py-2 rounded font-semibold"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointments;
