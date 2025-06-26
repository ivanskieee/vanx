import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Modal from './Modal';
import picture1 from './pics/cert1.png';
import picture2 from './pics/cert2.png';
import picture3 from './pics/cert3.png';
import picture4 from './pics/isite.jpg';
import picture5 from './pics/digi.png';
import picture6 from './pics/666.png';
import picture7 from './pics/cert7.jpg';

const credentials = [
  {
    title: 'Internet of Things: The Future of Technology',
    year: '2025',
    image: picture7,
    category: 'Webinar',
  },
  {
    title: '"Ctrl+Alt+Defend: Cybersecurity 101 for Students"',
    year: '2024',
    image: picture2,
    category: 'Cybersecurity',
  },
  {
    title: '3rd iSITE Conference Developing Industry Skills & Technological Advancement through Research',
    year: '2023',
    image: picture4,
    category: 'Conference',
  },
  {
    title: 'iSITE\'s 1st National Conference with the theme "AI Tools in Education"',
    year: '2023',
    image: picture1,
    category: 'AI & Education',
  },
  {
    title: 'Digital Imaging 101: Associating Digital Animation with Advertising',
    year: '2023',
    image: picture5,
    category: 'Digital Media',
  },
  {
    title: '"E-ffort: Put Forth a Successful Digital Folio"',
    year: '2023',
    image: picture6,
    category: 'Portfolio',
  },
  {
    title: 'International Multidisciplinary Research: "From a Languishing to a Flourishing Research Culture, through Collaboration"',
    year: '2022',
    image: picture3,
    category: 'Research',
  },
];

const CredentialsGrid = () => {
  const { darkMode } = useTheme();
  const [selectedCredential, setSelectedCredential] = useState(null);

  return (
    <section id="credentials" className={`relative py-24 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-white to-gray-50'} overflow-hidden transition-all duration-500`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-20 left-10 w-72 h-72 ${darkMode ? 'bg-blue-500' : 'bg-blue-500'} rounded-full ${darkMode ? 'filter blur-xl animate-pulse' : 'mix-blend-multiply filter blur-xl animate-pulse'}`}></div>
        <div className={`absolute bottom-20 right-10 w-72 h-72 ${darkMode ? 'bg-purple-500' : 'bg-purple-500'} rounded-full ${darkMode ? 'filter blur-xl animate-pulse' : 'mix-blend-multiply filter blur-xl animate-pulse'}`}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="">
            <svg className={`w-8 h-8 ${darkMode ? 'text-gray-300' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Credentials
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className={`group relative ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-2xl shadow-sm border overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2`}
              onClick={() => setSelectedCredential(credential)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={credential.image}
                  alt={credential.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium ${darkMode ? 'bg-gray-700/90 text-gray-200 border border-gray-600' : 'bg-white/90 text-gray-700 border border-white/20'} backdrop-blur-sm rounded-full`}>
                    {credential.category}
                  </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className={`w-10 h-10 ${darkMode ? 'bg-gray-700/90 border border-gray-600' : 'bg-white/90'} backdrop-blur-sm rounded-full flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                    {credential.year}
                  </span>
                </div>
                
                <h2 className={`text-lg font-semibold ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'} mb-2 line-clamp-3 transition-colors duration-300`}>
                  {credential.title}
                </h2>
                
                <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Completed in {credential.year}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent ${darkMode ? 'group-hover:border-blue-400/20' : 'group-hover:border-blue-500/20'} transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCredential && (
          <Modal onClose={() => setSelectedCredential(null)}>
            <div className="relative">
              <img
                src={selectedCredential.image}
                alt={selectedCredential.title}
                className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-sm font-medium ${darkMode ? 'bg-gray-700/90 text-gray-200 border border-gray-600' : 'bg-white/90 text-gray-700 border border-white/20'} backdrop-blur-sm rounded-full`}>
                  {selectedCredential.category}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                  {selectedCredential.title}
                </h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-100'} ml-4 flex-shrink-0`}>
                  {selectedCredential.year}
                </span>
              </div>
              
              <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Professional Development • Completed {selectedCredential.year}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default CredentialsGrid;