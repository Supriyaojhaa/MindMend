import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#B3DDF2] text-white py-12 px-6">
      <div className="container mx-auto max-w-5xl text-center md:text-left">
        {/* About Us */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            MindMend is your safe space for emotional well-being. We aim to break the stigma
            around mental health and provide access to professional support, resources, and healing tools.
            <br /><br />
            Our platform connects you to certified therapists, guided self-help modules, and real-time emotional tracking.
            Whether you're dealing with anxiety, stress, depression, or just need someone to talk to — MindMend is here for you.
            <br /><br />
            Founded with compassion, our mission is to ensure no one feels alone in their mental health journey.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">What We Do</h3>
          <p className="text-sm leading-relaxed">
            We offer therapy booking, AI-powered mood tracking, guided self-help tools, community forums,
            and emergency support — all in one secure platform designed with empathy and accessibility in mind.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-2xl font-bold text-rose-400 mb-4">Contact Us</h3>
          <div className="flex justify-between max-w-md mx-auto md:mx-0">
            <a href="tel:+911111111111" className="flex flex-col items-center gap-1 hover:underline">
              <FaPhoneAlt size={24} />
              <span>+91 1111111111</span>
            </a>
            <a
              href="https://wa.me/911111111111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 hover:underline"
            >
              <FaWhatsapp size={24} />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href="mailto:support@mindmend.com"
              className="flex flex-col items-center gap-1 hover:underline"
            >
              <FaEnvelope size={24} />
              <span>support@mindmend.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} MindMend. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
