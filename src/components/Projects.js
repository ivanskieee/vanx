import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ExternalLink, Code, Database, Gamepad2, Hotel, CreditCard, Calendar, Tag, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const videoRefs = useRef({});

  // Mock images and videos - replace with your actual imports
  const projects = [
    {
      id: 1,
      title: 'Snake Game',
      subtitle: 'Classic Arcade Recreation',
      description: 'A sophisticated implementation of the classic Snake game using GDevelop engine, featuring enhanced game mechanics, smooth animations, and modern visual design principles.',
      image: '/api/placeholder/400/300',
      video: '/api/placeholder/video/snake',
      category: 'Game Development',
      tech: ['GDevelop', 'JavaScript', 'Game Logic', 'Animation'],
      icon: Gamepad2,
      year: '2024',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'One Piece Adventure',
      subtitle: 'Interactive Gaming Experience',
      description: 'An immersive adventure game inspired by the One Piece universe, developed using Greenfoot framework with object-oriented programming principles and dynamic combat systems.',
      image: '/api/placeholder/400/300',
      video: '/api/placeholder/video/onepiece',
      category: 'Game Development',
      tech: ['Greenfoot', 'Java', 'OOP', 'Game Design'],
      icon: Gamepad2,
      year: '2024',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Brilata Hotel Booking',
      subtitle: 'Hospitality Management Solution',
      description: 'A comprehensive hotel booking platform featuring intuitive user interface design, advanced reservation management, and streamlined customer experience optimization.',
      image: '/api/placeholder/400/300',
      category: 'UI/UX Design',
      tech: ['Figma', 'React', 'Node.js', 'MongoDB'],
      icon: Hotel,
      year: '2024',
      status: 'Design Phase'
    },
    {
      id: 4,
      title: 'Tourism Package Management',
      subtitle: 'Travel Services Platform',
      description: 'An integrated travel management system providing comprehensive package deals, booking services, and customer relationship management for tourism businesses.',
      image: '/api/placeholder/400/300',
      category: 'Web Application',
      tech: ['React Native', 'Payment Gateway', 'GPS Integration', 'API'],
      icon: CreditCard,
      year: '2024',
      status: 'Development'
    },
    {
      id: 5,
      title: 'Cream & Cakes Inventory',
      subtitle: 'Business Management System',
      description: 'A sophisticated inventory management solution designed for bakery operations, featuring real-time stock tracking, sales analytics, and automated reorder systems.',
      image: '/api/placeholder/400/300',
      video: '/api/placeholder/video/inventory',
      category: 'Full Stack Development',
      tech: ['React', 'MongoDB', 'Express.js', 'Analytics'],
      icon: Database,
      year: '2024',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'BSIT4-Eva-lution',
      subtitle: 'Academic Evaluation System',
      description: 'A revolutionary digital evaluation platform for San Pablo Colleges, implementing advanced assessment methodologies and comprehensive academic performance analytics.',
      image: '/api/placeholder/400/300',
      video: '/api/placeholder/video/capstone',
      category: 'Capstone Project',
      tech: ['React', 'Python', 'Machine Learning', 'PostgreSQL'],
      icon: Code,
      year: '2024',
      status: 'In Progress'
    },
  ];

  const handleVideoToggle = (projectId) => {
    if (activeVideo === projectId) {
      setActiveVideo(null);
      if (videoRefs.current[projectId]) {
        videoRefs.current[projectId].pause();
      }
    } else {
      setActiveVideo(projectId);
      setTimeout(() => {
        if (videoRefs.current[projectId]) {
          videoRefs.current[projectId].play();
        }
      }, 100);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Development': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Design Phase': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Professional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Featured Projects
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive showcase of technical expertise spanning game development, 
            web applications, and enterprise solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image/Video Container */}
                <div className="relative h-64 overflow-hidden bg-gray-50">
                  {activeVideo === project.id && project.video ? (
                    <video
                      ref={(el) => (videoRefs.current[project.id] = el)}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Top Badge Row */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-slate-700 shadow-sm border border-white/50">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>

                  {/* Video Control */}
                  {project.video && (
                    <button
                      onClick={() => handleVideoToggle(project.id)}
                      className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg border border-white/50"
                    >
                      {activeVideo === project.id ? (
                        <Pause className="w-5 h-5 text-slate-700" />
                      ) : (
                        <Play className="w-5 h-5 text-slate-700 ml-0.5" />
                      )}
                    </button>
                  )}

                  {/* Project Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 font-medium transition-colors duration-200 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-lg hover:shadow-xl">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100/0 via-slate-100/5 to-slate-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Professional Footer */}
        <div className="text-center border-t border-gray-200 pt-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Explore Complete Portfolio
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover additional projects and technical implementations across various domains
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4" />
            </button>
            
            <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-slate-50">
              Download Portfolio PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;