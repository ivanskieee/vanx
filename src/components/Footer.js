import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/Brilata.Ivan',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://x.com/ChubbyxGwapo',
      color: 'hover:text-sky-500',
      bgColor: 'hover:bg-sky-50'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/ivannskieee/',
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/ivan-brilata-b189b0283/',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="text-center">
          {/* Professional Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Building meaningful professional relationships and fostering collaborative opportunities in technology and innovation.
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
                className={`group relative flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-gray-300 transition-all duration-300 ${social.color} ${social.bgColor}/10 hover:scale-110 hover:shadow-lg hover:shadow-white/10`}
                aria-label={`Connect on ${social.name}`}
              >
                <i className={`${social.icon} text-xl transition-transform duration-300 group-hover:scale-110`}></i>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-white text-gray-900 text-sm font-medium px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>

                {/* Hover Ring */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/20 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-4 text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
              Crafted with 
              <span className="inline-flex items-center">
                <svg className="w-5 h-5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </span>
              and precision by
              <span className="font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ivanskieee
              </span>
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span>© 2024 Ivan Brilata</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>Professional Portfolio</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;