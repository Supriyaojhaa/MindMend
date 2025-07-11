import './App.css'
import About from './components/About'
import Appointment from './components/Appointments'
import Hero from './components/Hero'
import MoodTracker from './components/MoodTracker'
import Navbar from './components/Navbar'
import Login from './components/pages/Login';

import Services from './components/Services'
import Therapist from './components/Therapist'

import TherapistLogin from "./components/TherapistLogin"; 
import TherapistDashboard from "./components/TherapistDashboard";

import { Routes, Route } from 'react-router-dom';
import SelfHelp from './components/SelfHelp'

const HomePage = () => {
  return (
    <div className='font-primary overflow-x-hidden pt-24'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Appointment/>
      <MoodTracker/>
      <Therapist />
      <SelfHelp/>
      <About/>
      
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/therapistLogin" element={<TherapistLogin />} />
      <Route path="/therapistDashboard" element={<TherapistDashboard />} />
    </Routes>
  );
}

export default App;
