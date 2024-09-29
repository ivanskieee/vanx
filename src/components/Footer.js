import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center" id="contact">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/Brilata.Ivan" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://x.com/ChubbyxGwapo" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/ivannskieee/" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/ivan-brilata-b189b0283/" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p className="text-lg text-gray-700">
          Made with <i className="fa fa-heart text-gray-600"></i> by ivanskieee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
