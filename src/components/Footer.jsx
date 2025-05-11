import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold mb-4 tracking-wide">Let's Connect</h2>
        
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a
            href="https://github.com/DhammaMendhe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhammadip-mendhe-8b8558230/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:send2dhammadipmendhe@gmail.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Dhammadip Mendhe</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
