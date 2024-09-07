import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for RGB animation
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

// Styled components
const Text = styled.span`
  background: linear-gradient(45deg, rgba(0, 0, 255, 1), rgba(0, 128, 255, 1), rgba(0, 255, 255, 1), rgba(0, 0, 128, 1));
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  display: inline-block;
  overflow: hidden;
  animation: ${gradientAnimation} 12s linear infinite; /* Slowed down from 6s to 12s */
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 px-6 bg-black text-white shadow-md font-serif">
      <div className="relative flex items-center">
        {/* RGB Animated Text */}
        <Text>Ivan Brilata</Text>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-40 bg-gray-900 text-left transition-all duration-500 z-10 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <i className="fa fa-times m-4 cursor-pointer text-lg" onClick={toggleMenu}></i>
        <ul className="space-y-4 mt-12 ml-4">
          <li className="hover:bg-gray-700 transition-colors duration-300 px-3 py-2 rounded text-lg">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-gray-700 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#projects">Projects</a></li>
          <li className="hover:bg-gray-700 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#credentialssection">Credentials</a></li>
          <li className="hover:bg-gray-700 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#picturessection">Pictures</a></li>
          <li className="hover:bg-gray-700 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg ml-auto">
        <li className="hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded">
          <a href="#home">Home</a>
        </li>
        <li className="hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded"><a href="#projects">Projects</a></li>
        <li className="hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded"><a href="#credentialssection">Credentials</a></li>
        <li className="hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded"><a href="#picturessection">Pictures</a></li>
        <li className="hover:bg-gray-700 transition-colors duration-300 px-4 py-2 rounded"><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <i className="fa fa-bars text-2xl cursor-pointer" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Navbar;
