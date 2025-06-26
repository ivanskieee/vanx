import React from "react";
import { useTheme } from '../contexts/ThemeContext';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const { darkMode } = useTheme();
  
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/Brilata.Ivan",
      color: "hover:text-blue-600",
      bgColor: darkMode ? "hover:bg-blue-900/30" : "hover:bg-blue-50",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://x.com/ChubbyxGwapo",
      color: "hover:text-sky-500",
      bgColor: darkMode ? "hover:bg-sky-900/30" : "hover:bg-sky-50",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/ivannskieee/",
      color: "hover:text-pink-600",
      bgColor: darkMode ? "hover:bg-pink-900/30" : "hover:bg-pink-50",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/ivan-brilata-b189b0283/",
      color: "hover:text-blue-700",
      bgColor: darkMode ? "hover:bg-blue-900/30" : "hover:bg-blue-50",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/ivanskieee",
      color: darkMode ? "hover:text-gray-300" : "hover:text-gray-800",
      bgColor: darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50",
    },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t transition-all duration-500`} id="contact">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h2>
            <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building meaningful professional relationships and fostering
              collaborative opportunities in technology and innovation.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-12 h-12 border rounded-lg transition-all duration-200 ${social.color} ${social.bgColor} hover:border-current ${
                  darkMode 
                    ? 'border-gray-600 text-gray-400 hover:text-current' 
                    : 'border-gray-300 text-gray-600'
                }`}
                aria-label={`Connect on ${social.name}`}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className={`border-t mb-8 transition-all duration-500 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}></div>

          {/* Copyright */}
          <div className="space-y-4">
            <p className={`text-lg transition-all duration-500 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Crafted with care by{" "}
              <span className={`font-semibold transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>ivanskieee</span>
            </p>

            <div className={`flex items-center justify-center gap-6 text-sm transition-all duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span>© 2025 Ivan Brilata</span>
              <span className={`w-1 h-1 rounded-full transition-all duration-500 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></span>
              <span>Professional Portfolio</span>
              <span className={`w-1 h-1 rounded-full transition-all duration-500 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;