import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import heroImg from "../assets/bg1.png"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id='home' className='bg-[#B3DDF2] text-white flex items-center pt-28 md:h-screen'>
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
      {/* left side */}
      <div className='md:w-1/2'>
      <div className='text-4xl text-red-400 font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Welcome to MindMend</div>
      <p className='text-lg mb-12 md:pr-8'>Your Safe Space to express yourself. We’re here to support you—whether you're feeling anxious, low, or just need a safe space to breathe because You're not alone.</p>
      <button
      onClick={() => navigate('/login')}
      className='bg-white text-red-400 py-3.5 px-8 font-medium rounded-md hover:bg-rose-50 flex items-center gap-1'
      >
        <span>Get Started as User</span>
        <IoIosArrowDroprightCircle />
        </button>

        <button
        onClick={() => navigate('/therapistLogin')}  // change this to whatever route you want
        className='bg-rose-400 text-white py-3.5 px-8 font-medium rounded-md hover:bg-rose-500 flex items-center gap-1 mt-1'>
        <span>Get Started as Therapist</span>
        <IoIosArrowDroprightCircle />
        </button>

      </div>

      {/* right side */}
      <div className='md:w-1/2 h-full'>
       <img src={heroImg} alt="hero image" className='w-full object-cover' />
      </div>
    </div>
    </section>
  )
}

export default Hero
