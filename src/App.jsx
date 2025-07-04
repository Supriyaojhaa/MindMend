
import './App.css'
import About from './components/About'
import Appointment from './components/Appointments'
import Hero from './components/Hero'
import MoodTracker from './components/MoodTracker'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Therapist from './components/Therapist'


function App() {
  

  return (
    
    <div className='font-primary overfllow-x-hidden pt-24'>
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

export default App
