import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 px-6 bg-white text-gray-900 shadow-md font-sans">
      <div className="relative flex items-center ml-5">
        <span className="text-2xl font-bold">Ivan Brilata</span> 
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-40 bg-white text-left transition-all duration-500 z-10 ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <i className="fa fa-times m-4 cursor-pointer text-lg text-gray-900" onClick={toggleMenu}></i>
        <ul className="space-y-4 mt-12 ml-4 text-gray-900">
          <li className="hover:bg-gray-100 transition-colors duration-300 px-3 py-2 rounded text-lg">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-gray-100 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#skills">Skills</a></li>
          <li className="hover:bg-gray-100 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#projects">Projects</a></li>
          <li className="hover:bg-gray-100 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#credentials">Credentials</a></li>
          <li className="hover:bg-gray-100 transition-colors duration-300 px-3 py-2 rounded text-lg"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg ml-auto text-gray-900">
        <li className="hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded">
          <a href="#home">Home</a>
        </li>
        <li className="hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded"><a href="#skills">Skills</a></li>
        <li className="hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded"><a href="#projects">Projects</a></li>
        <li className="hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded"><a href="#credentials">Credentials</a></li>
        <li className="hover:bg-gray-100 transition-colors duration-300 px-4 py-2 rounded"><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <i className="fa fa-bars text-2xl cursor-pointer text-gray-900" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
};

export default Navbar;
