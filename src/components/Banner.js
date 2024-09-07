import React from 'react';
import { Parallax } from 'react-parallax';
import firstImage from './pics/first.jpg'; // Import the image file

const Banner = () => {
  return (
    <Parallax
      bgImage={firstImage}
      strength={500}
      bgImageStyle={{ filter: 'brightness(50%)' }} // Darkens the image
    >
      <div
        className="h-screen flex flex-col justify-center items-center text-white"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75))', // Apply the gradient overlay
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">BE CREATIVE</h1>
        <p className="text-lg md:text-xl mb-6">View IVAN'S Website to Learn More About Him.</p>
        <div>
          <button className="bg-transparent border-2 border-gray-500 text-white py-2 px-6 rounded-full font-bold hover:bg-gray-700 transition-colors duration-300 mx-2">
            <a className="mainbutton" href="#home" target="_blank">BROWSE MORE</a>
          </button>
          <button className="bg-transparent border-2 border-gray-500 text-white py-2 px-6 rounded-full font-bold hover:bg-gray-700 transition-colors duration-300 mx-2">
            <a className="mainbutton" href="https://www.instagram.com/ivannskieee/" target="_blank">FOLLOW ME</a>
          </button>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
