import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const handleToggle = () =>{
    setIsOpen(!isOpen)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  const handleScroll = () =>{
    const sections = ['home', 'services', 'appointments', 'moodtracker', 'therapists', 'about'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(sections => {
      const element = document.getElementById(sections);
      if(element){
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if(scrollPosition >= offsetTop && scrollPosition < offsetTop +height) {
          setActiveSection(sections);
        }
      }
    })
  }

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement){
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior:'smooth'
      })
    }
  }

  const navLinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
      <li>
        <motion.a
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={(e) =>{
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('home')
        }}
        href="#home"

        className = {`text-white ${activeSection === 'home' ? 'isActive' : ''}`}
        >Home</motion.a>
      </li>
      <li>
        <motion.a href="#services"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={(e) =>{
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('services')
        }}
        className = {`text-white ${activeSection === 'services' ? 'isActive' : ''}`}
        >Services</motion.a>
      </li>
      <li>
        <motion.a href="#appointments"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={(e) =>{
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('appointments')
        }}
        className = {`text-white ${activeSection === 'appointments' ? 'isActive' : ''}`}
        >Appointments</motion.a>
      </li>
      <li>
        <motion.a href="#moodtracker"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={(e) =>{
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('moodtracker')
        }}
        className = {`text-white ${activeSection === 'moodtracker' ? 'isActive' : ''}`}
        >Mood Tracker</motion.a>
      </li>
      <li>
        <motion.a href="#therapists"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={(e) =>{
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('therapists')
        }}
        className = {`text-white ${activeSection === 'therapists' ? 'isActive' : ''}`}
        >Therapists</motion.a>
      </li>
      <li>
        <motion.a href="#about"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={(e) =>{
          e.preventDefault();
          handleCloseMenu();
          handleScrollTo('about')
        }}
        className = {`text-white ${activeSection === 'about' ? 'isActive' : ''}`}
        >About Us</motion.a>
      </li>
    </ul>
  )

  return (
    <header className='bg-[#B3DDF2] text-white py-6 px-4 fixed top-0 left-0 right-0 z-50'>
        <div className='container mx-auto flex justify-between items-center h-full'>
            {/* logo */}
            <div>
                <a href='/' className="flex items-center space-x-2">
                <img src="/icon.png" alt='logo'  className="h-6 w-6 object-contain"/>
                <span className="text-xl font-semibold text-rose-400">MindMend</span>
                </a>
            </div>

            {/* navitems */}
            <div className='hidden md:flex flex-grow justify-center'>
              <nav>
                {navLinks}
              </nav>
            </div>

            {/* button  */}
            <div className='hidden md:block'>
              <a href="tel:+911111111111" className='text-rose-400 bg-white hover:bg-rose-50 px-4 py-2 rounded'>
                Emergency Contacts
              </a>
            </div>

            {/* menu */}
            <div className='block md:hidden'>
              <button 
              onClick={handleToggle}
              className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
              <HiOutlineMenuAlt3 className='size-6'/>
              </button>
            </div>
        </div>

        {/* mobile nav items */}
        {
          isOpen && (
            <nav className='absolute top-full left-0 w-full bg-[#B3DDF2]'>
              <ul className='flex flex-col p-4 space-y-3'>
                {navLinks.props.children}
                <li className='py-2'>
                <a href="#contact"
                className='text-rose-400 bg-white hover:bg-rose-50 px-4 py-2 rounded'
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                }   
                }
                >Emergency Contact</a>
              </li>
              </ul>
              
            </nav>
          )
        }
    </header>
  )
}  

export default Navbar
