import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Gamepad2, Hotel, CreditCard, Database, Code, Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import SALES from "./pics/sales.png";

const Projects = () => {
  const { darkMode } = useTheme(); // Get the current theme state
  const [flippedCards, setFlippedCards] = useState(new Set());

  const projects = [
    {
      id: 1,
      title: 'Sales Dashboard',
      subtitle: 'A Functional Dashboard Designed for the First Client',
      description: 'A sophisticated implementation of the classic Snake game using GDevelop engine, featuring enhanced game mechanics, smooth animations, and modern visual design principles. The game incorporates advanced collision detection, progressive difficulty scaling, and responsive controls optimized for both desktop and mobile platforms.',
      image: SALES,
      category: 'Web Development',
      tech: ['Ruby', 'React JS', 'Tailwind CSS'],
      icon: Code,
      year: '2025',
      status: 'Completed',
      features: ['Responsive Controls', 'Progressive Difficulty', 'Score System', 'Mobile Optimized']
    },
    {
      id: 2,
      title: 'One Piece Adventure',
      subtitle: 'Interactive Gaming Experience',
      description: 'An immersive adventure game inspired by the One Piece universe, developed using Greenfoot framework with object-oriented programming principles and dynamic combat systems. Features include character progression, interactive storylines, and seamless gameplay mechanics that capture the essence of the beloved anime series.',
      image: '/api/placeholder/400/300',
      category: 'Game Development',
      tech: ['Greenfoot', 'Java', 'OOP', 'Game Design'],
      icon: Gamepad2,
      year: '2024',
      status: 'Completed',
      features: ['Character Progression', 'Dynamic Combat', 'Story Mode', 'Interactive UI']
    },
    {
      id: 3,
      title: 'Brilata Hotel Booking',
      subtitle: 'Hospitality Management Solution',
      description: 'A comprehensive hotel booking platform featuring intuitive user interface design, advanced reservation management, and streamlined customer experience optimization. The system integrates payment processing, room availability tracking, and customer relationship management to provide a complete hospitality solution.',
      image: '/api/placeholder/400/300',
      category: 'UI/UX Design',
      tech: ['Figma', 'React', 'Node.js', 'MongoDB'],
      icon: Hotel,
      year: '2024',
      status: 'Design Phase',
      features: ['Real-time Booking', 'Payment Integration', 'Customer Portal', 'Admin Dashboard']
    },
    {
      id: 4,
      title: 'Tourism Package Management',
      subtitle: 'Travel Services Platform',
      description: 'An integrated travel management system providing comprehensive package deals, booking services, and customer relationship management for tourism businesses. The platform includes GPS integration for location-based services, secure payment gateways, and comprehensive analytics for business insights.',
      image: '/api/placeholder/400/300',
      category: 'Web Application',
      tech: ['React Native', 'Payment Gateway', 'GPS Integration', 'API'],
      icon: CreditCard,
      year: '2024',
      status: 'Development',
      features: ['Package Management', 'GPS Integration', 'Secure Payments', 'Customer Analytics']
    },
    {
      id: 5,
      title: 'Cream & Cakes Inventory',
      subtitle: 'Business Management System',
      description: 'A sophisticated inventory management solution designed for bakery operations, featuring real-time stock tracking, sales analytics, and automated reorder systems. The application provides comprehensive reporting, supplier management, and predictive analytics to optimize bakery operations and reduce waste.',
      image: '/api/placeholder/400/300',
      category: 'Full Stack Development',
      tech: ['React', 'MongoDB', 'Express.js', 'Analytics'],
      icon: Database,
      year: '2024',
      status: 'Completed',
      features: ['Real-time Tracking', 'Sales Analytics', 'Automated Reorders', 'Waste Reduction']
    },
    {
      id: 6,
      title: 'BSIT4-Eva-lution',
      subtitle: 'Academic Evaluation System',
      description: 'A revolutionary digital evaluation platform for San Pablo Colleges, implementing advanced assessment methodologies and comprehensive academic performance analytics. The system features machine learning algorithms for performance prediction, automated grading systems, and detailed progress tracking for enhanced educational outcomes.',
      image: '/api/placeholder/400/300',
      category: 'Capstone Project',
      tech: ['React', 'Python', 'Machine Learning', 'PostgreSQL'],
      icon: Code,
      year: '2024',
      status: 'In Progress',
      features: ['ML Analytics', 'Automated Grading', 'Progress Tracking', 'Performance Prediction']
    },
  ];

  const handleCardFlip = (projectId) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(projectId)) {
        newFlipped.delete(projectId);
      } else {
        newFlipped.add(projectId);
      }
      return newFlipped;
    });
  };

  const getStatusColor = (status) => {
    const colors = {
      'Completed': darkMode ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-white',
      'In Progress': darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white',
      'Development': darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white',
      'Design Phase': darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white',
      default: darkMode ? 'bg-gray-600 text-white' : 'bg-gray-500 text-white'
    };
    return colors[status] || colors.default;
  };

  // Theme-based classes
  const backgroundClasses = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
    : "bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100";
  
  const textClasses = darkMode
    ? "text-white"
    : "text-gray-900";
  
  const subtextClasses = darkMode
    ? "text-gray-300"
    : "text-gray-600";
  
  const cardClasses = darkMode
    ? "bg-gray-800 border-gray-700 shadow-xl"
    : "bg-white border-gray-100 shadow-lg";

  return (
    <section id="projects" className={`min-h-screen ${backgroundClasses} py-24 transition-all duration-500`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'} 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Enhanced animated background elements for dark mode */}
      {darkMode && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl lg:text-6xl font-bold ${textClasses} mb-6 transition-all duration-500`}>
            Project Portfolio
          </h1>
          <p className={`text-xl ${subtextClasses} max-w-3xl mx-auto leading-relaxed transition-all duration-500`}>
            A comprehensive showcase of technical expertise and creative solutions across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            const isFlipped = flippedCards.has(project.id);
            
            return (
              <div
                key={project.id}
                className="relative w-full h-96 perspective-1000 cursor-pointer group"
                onClick={() => handleCardFlip(project.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden ${cardClasses} rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105`}>
                    {/* Image */}
                    <div className={`relative h-48 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className={`absolute inset-0 ${darkMode ? 'bg-black/20' : 'bg-black/10'}`}></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700/90 border border-gray-600' : 'bg-white/90'} backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transition-all duration-300`}>
                          <IconComponent className={`w-6 h-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1 transition-all duration-300`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium transition-all duration-300`}>
                          {project.category}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 ${darkMode ? 'bg-gray-700 text-gray-300 border border-gray-600' : 'bg-gray-100 text-gray-700'} text-xs font-medium rounded-md transition-all duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className={`px-2 py-1 ${darkMode ? 'bg-gray-700 text-gray-300 border border-gray-600' : 'bg-gray-100 text-gray-700'} text-xs font-medium rounded-md transition-all duration-300`}>
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Year */}
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-all duration-300`}>
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{project.year}</span>
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} font-medium transition-all duration-300`}>
                          Click to view details →
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Card */}
                  <div className={`absolute inset-0 w-full h-full backface-hidden ${cardClasses} rounded-2xl rotate-y-180 overflow-hidden`}>
                    <div className="p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-8 h-8 ${darkMode ? 'text-gray-200' : 'text-gray-700'} transition-all duration-300`} />
                          <div>
                            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} transition-all duration-300`}>
                              {project.title}
                            </h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-all duration-300`}>
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                        <button className={`p-2 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-colors`}>
                          <ArrowLeft className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                        </button>
                      </div>

                      {/* Description */}
                      <div className="flex-1 mb-4">
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4 transition-all duration-300`}>
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-4">
                          <h4 className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 transition-all duration-300`}>Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full`}></div>
                                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300`}>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'} pt-4 transition-all duration-300`}>
                        {/* Technologies */}
                        <div className="mb-3">
                          <h4 className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide mb-2 transition-all duration-300`}>
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech, index) => (
                              <span
                                key={index}
                                className={`px-2 py-1 ${darkMode ? 'bg-blue-900/50 text-blue-300 border border-blue-800' : 'bg-blue-50 text-blue-700 border border-blue-100'} text-xs font-medium rounded transition-all duration-300`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action */}
                        <button className={`w-full ${darkMode ? 'bg-white hover:bg-gray-200 text-gray-900' : 'bg-gray-900 hover:bg-gray-800 text-white'} text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}>
                          <span>View Project</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm transition-all duration-300`}>
            Click on any project card to explore detailed information and technical specifications
          </p>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;