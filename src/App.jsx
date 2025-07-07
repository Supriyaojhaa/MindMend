
// import './App.css'
// import About from './components/About'
// import Appointment from './components/Appointments'
// import Hero from './components/Hero'
// import MoodTracker from './components/MoodTracker'
// import Navbar from './components/Navbar'
// import Login from './components/pages/login'
// import Services from './components/Services'
// import Therapist from './components/Therapist'


// import TherapistDashboard from "./components/TherapistDashboard";

// import { Routes, Route } from 'react-router-dom';

// const HomePage = () => {

//   return (
    
//     <div className='font-primary overflow-x-hidden pt-24'>
//       <Navbar/>
//       <Hero/>
//       <Services/>
//       <Appointment/>
//       <MoodTracker/>
//       <Therapist />
//       <About/>
      
//     </div>
//   )
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/therapistLogin" element={<TherapistLogin />} />
//       <Route path="/therapistDashboard" element={<TherapistDashboard />} />
//     </Routes>
//   );
// }

// export default App


import './App.css'
import About from './components/About'
import Appointment from './components/Appointments'
import Hero from './components/Hero'
import MoodTracker from './components/MoodTracker'
import Navbar from './components/Navbar'
import Login from './components/pages/login'
import Services from './components/Services'
import Therapist from './components/Therapist'

import TherapistLogin from "./components/TherapistLogin"; 
import TherapistDashboard from "./components/TherapistDashboard";

import { Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='font-primary overflow-x-hidden pt-24'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Appointment/>
      <MoodTracker/>
      <Therapist />
      <About/>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/therapistLogin" element={<TherapistLogin />} /> {/* ✅ Route will now work */}
      <Route path="/therapistDashboard" element={<TherapistDashboard />} />
    </Routes>
  );
}

export default App;
