import React from "react";
import meeraImg from "../assets/meera.png";
import arjunImg from "../assets/arjun.png";
import riyaImg from "../assets/riya.png";
import sameerImg from "../assets/sameer.png";
import nishaImg from "../assets/nisha.png";
import karanImg from "../assets/karan.png";

const therapistList = [
  {
    name: "Dr. Meera Sharma",
    degree: "PhD in Clinical Psychology",
    image: meeraImg,
  },
  {
    name: "Dr. Arjun Verma",
    degree: "MSc in Counseling Psychology",
    image: arjunImg,
  },
  {
    name: "Dr. Riya Kapoor",
    degree: "PhD in Behavioral Therapy",
    image: riyaImg,
  },
  {
    name: "Dr. Sameer Iqbal",
    degree: "M.Phil in Psychiatry",
    image: sameerImg,
  },
  {
    name: "Dr. Nisha Batra",
    degree: "MS in Clinical Psychology",
    image: nishaImg,
  },
  {
    name: "Dr. Karan Desai",
    degree: "PhD in Mental Health Studies",
    image: karanImg,
  }
];

const Therapists = () => {
  return (
    <section id="therapists" className="bg-[#B3DDF2] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">Meet Our Therapists</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapistList.map((therapist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{therapist.name}</h3>
              <p className="text-gray-600 mb-4">{therapist.degree}</p>
              <a
                href="#appointments"
                className="inline-block bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded transition duration-200"
              >
                Book Appointment
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapists;

