import React from 'react';
import { Parallax } from 'react-parallax';
import bgimg from './pics/ayban.png';
import minimalist from './pics/minimalist.jpg'; // Import your minimalist background image
import OIP from './pics/11.png';
import OIPS from './pics/22.png';
import PYTHO from './pics/33.png';
import CS from './pics/44.png';
import BS from './pics/55.png';
import IT from './pics/66.png';
import REACT from './pics/88.png';
import NODE from './pics/99.png';

const Banner = () => {
  const logos = [OIP, OIPS, PYTHO, CS, BS, IT, REACT, NODE];

  const marqueeContainerStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    height: '50px',
    marginTop: '10px',
  };

  const marqueeStyle = {
    display: 'flex',
    animation: 'marquee 60s linear infinite',
  };

  const marqueeItemStyle = {
    flexShrink: 0,
    padding: '0 0.5rem',
  };

  return (
    <Parallax strength={300}>
      <div 
        className="h-screen flex flex-col md:flex-row justify-center items-center bg-opacity-50 bg-white px-4 md:px-6" 
        style={{
          backgroundImage: `url(${minimalist})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Mobile View: Image as Header */}
        <div className="flex flex-col md:hidden items-center mb-4">
          <img
            src={bgimg}
            alt="Ivan's profile"
            className="w-64 h-80 rounded-lg border-4 border-gray-200 shadow-lg object-cover"
          />
          <p className="text-sm sm:text-base md:text-xl text-gray-700 font-medium text-right mt-2">
            Aspiring Full-stack Web Developer | Data Analyst | IT Enthusiast
          </p>
        </div>
  
        {/* Desktop View: Left Section with Text */}
        <div className="hidden md:flex flex-1 flex-col justify-center items-start text-left space-y-2 md:ml-20">
          <p className="text-base md:text-xl text-gray-700 font-medium">
            Aspiring Full-stack Web Developer | Data Analyst | IT Enthusiast
          </p>
          <p className="text-base md:text-lg text-gray-600 font-light">
            Passionate about building web solutions and making data-driven decisions.
          </p>
          <br />
          {/* Languages section */}
          <h2 className="text-base md:font-semibold mt-5 mb-1 text-gray-800">
            Languages & Technologies I Used in Some Projects
          </h2>
          <br />
          <div style={marqueeContainerStyle}>
            <div style={{ ...marqueeStyle, width: `${logos.length * 100}%` }}>
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="p-1" style={marqueeItemStyle}>
                  <div className="p-1">
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="mx-auto max-h-8 filter grayscale"
                      style={{ filter: 'grayscale(100%)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Right Section with Larger Image for Desktop */}
        <div className="hidden md:flex flex-1 justify-center items-center mt-8 md:mt-0">
          <img
            src={bgimg}
            alt="Ivan's profile"
            className="w-80 h-120 md:w-120 md:h-120 rounded-lg border-4 border-gray-200 shadow-lg object-cover"
          />
        </div>
  
        {/* Mobile View: Languages Section after the Image */}
        <div className="flex md:hidden flex-col items-center">
          <h2 className="text-sm sm:text-base md:text-base md:font-semibold mt-3 mb-1 text-gray-800">
            Languages & Technologies I Used in Some Projects
          </h2>
          <div style={marqueeContainerStyle}>
            <div style={{ ...marqueeStyle, width: `${logos.length * 100}%` }}>
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="p-1" style={marqueeItemStyle}>
                  <div className="p-1">
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="mx-auto max-h-8 filter grayscale"
                      style={{ filter: 'grayscale(100%)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );  
};

export default Banner;

// Adding keyframes using template literals
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes marquee {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-220%);
    }
}
`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
