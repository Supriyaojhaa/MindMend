import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

import heroImg from "../assets/bg1.png"

const Hero = () => {
  return (
    <section id='home' className='bg-[#B3DDF2] text-white flex items-center pt-28 md:h-screen'>
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
      {/* left side */}
      <div className='md:w-1/2'>
      <div className='text-4xl text-red-400 font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Welcome to MindMend</div>
      <p className='text-lg mb-12 md:pr-8'>Your Safe Space to express yourself. We’re here to support you—whether you're feeling anxious, low, or just need a safe space to breathe because You're not alone.</p>
      <button className='bg-white text-red-400 py-3.5 px-8 front-medium rounded-md hover:bg-rose-50'>
        <a href="#contact" className='flex gap-1 items-center'>
          <span>Get Started</span>
          <IoIosArrowDroprightCircle />
        </a>
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
