import React, { useEffect, useState } from "react";


const bookings = [
  { id: 1, patientName: "Alice", therapist: "Dr. Meera Sharma", date: "2025-07-10", time: "10:00 AM", reason: "Anxiety" },
  { id: 2, patientName: "Bob", therapist: "Dr. Arjun Verma", date: "2025-07-11", time: "11:00 AM", reason: "Stress" },
  { id: 3, patientName: "Carol", therapist: "Dr. Meera Sharma", date: "2025-07-12", time: "01:00 PM", reason: "Depression" },
  
];

const TherapistDashboard = () => {
  const [therapist, setTherapist] = useState(null);

  useEffect(() => {
    const loggedInTherapist = localStorage.getItem("loggedInTherapist");
    if (loggedInTherapist) {
      setTherapist(loggedInTherapist);
    } else {
      setTherapist(null);
    }
  }, []);

  if (!therapist) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Please log in as a therapist to view this page.</h2>
      </div>
    );
  }

  const therapistBookings = bookings.filter(b => b.therapist === therapist);

  return (
    <section className="max-w-4xl mx-auto p-6 mt-10 bg-[#B3DDF2] rounded-md shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-rose-500">
        Welcome, {therapist}
      </h1>
      <h2 className="text-xl font-semibold mb-4">Your Patient Bookings</h2>

      {therapistBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-rose-400 text-white">
              <th className="border border-gray-300 p-2">Patient Name</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Reason</th>
            </tr>
          </thead>
          <tbody>
            {therapistBookings.map(({ id, patientName, date, time, reason }) => (
              <tr key={id} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{patientName}</td>
                <td className="border border-gray-300 p-2">{date}</td>
                <td className="border border-gray-300 p-2">{time}</td>
                <td className="border border-gray-300 p-2">{reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default TherapistDashboard;
