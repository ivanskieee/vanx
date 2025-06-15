import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Code, Database, GitBranch, Wrench, BarChart3, Lightbulb } from 'lucide-react';
import bgimg from "./pics/ayban.png";
import OIP from "./pics/11.png";
import OIPS from "./pics/22.png";
import PYTHO from "./pics/33.png";
import CS from "./pics/44.png";
import BS from "./pics/55.png";
import IT from "./pics/66.png";
import REACT from "./pics/88.png";
import NODE from "./pics/99.png";
import RUBY from "./pics/ror.png";
import TAIL from "./pics/tail.png";

const CombinedNavbarBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const logos = [
    { name: "HTML", color: "#E34F26", darkColor: "#FF6B47", image: OIP },
    { name: "CSS", color: "#1572B6", darkColor: "#4DABF7", image: OIPS },
    { name: "Python", color: "#3776AB", darkColor: "#5C9BD5", image: PYTHO },
    { name: "C#", color: "#239120", darkColor: "#51CF66", image: CS },
    { name: "Bootstrap", color: "#7952B3", darkColor: "#9775FA", image: BS },
    { name: "IT", color: "#0078D4", darkColor: "#339AF0", image: IT },
    { name: "React", color: "#61DAFB", darkColor: "#74C0FC", image: REACT },
    { name: "Node", color: "#339933", darkColor: "#69DB7C", image: NODE },
    { name: "Ruby", color: "#CC342D", darkColor: "#FF6B6B", image: RUBY },
    { name: "Tailwind", color: "#06B6D4", darkColor: "#22D3EE", image: TAIL },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSkillsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const themeClasses = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    : "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900";

  const navbarClasses = darkMode
    ? "bg-black/80 backdrop-blur-md border-gray-700/50 text-white"
    : "bg-white/80 backdrop-blur-md border-gray-200/50 text-gray-800";

  const sidebarClasses = darkMode
    ? "bg-gray-900/95 backdrop-blur-md border-gray-700/50"
    : "bg-white/95 backdrop-blur-md border-gray-200/50";

    const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Working knowledge of HTML, CSS, JavaScript, PHP, Ruby and Python for creating responsive websites.",
      color: "#E34F26",
      darkColor: "#FF6B47"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Familiar with using SQL and database management systems like MySQL.",
      color: "#1572B6",
      darkColor: "#4DABF7"
    },
    {
      icon: GitBranch,
      title: "Ruby on Rails",
      description: "Proficient in using Ruby on Rails in developing an application, especially a web application.",
      color: "#CC342D",
      darkColor: "#FF6B6B"
    },
    {
      icon: Wrench,
      title: "Version Control",
      description: "Proficient in using Git for version control and collaboration on software projects.",
      color: "#339933",
      darkColor: "#69DB7C"
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Basic knowledge in analyzing data sets.",
      color: "#3776AB",
      darkColor: "#5C9BD5"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Adept at troubleshooting technical issues and finding innovative solutions.",
      color: "#7952B3",
      darkColor: "#9775FA"
    }
  ];

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${themeClasses}`}
    >
     {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          darkMode
            ? "bg-black/80 border-b border-white/[0.08]"
            : "bg-white/80 border-b border-black/[0.08]"
        }`}
        style={{
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          background: darkMode 
            ? 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(10,10,10,0.80) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(250,250,250,0.80) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Brand */}
            <div className="flex items-center">
              <div className="relative group">
                <span
                  className={`text-xl font-semibold tracking-[-0.02em] transition-all duration-500 ${
                    darkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Ivan Brilata
                </span>
                <div
                  className={`absolute -bottom-0.5 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full ${
                    darkMode 
                      ? "bg-white/60" 
                      : "bg-gray-900/60"
                  }`}
                ></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <div
                className={`flex items-center space-x-1 p-1 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-white/[0.06] border border-white/[0.08]"
                    : "bg-black/[0.04] border border-black/[0.06]"
                }`}
                style={{
                  backdropFilter: 'blur(16px)',
                }}
              >
                {["Home", "Skills", "Projects", "Credentials", "Contact"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/[0.08]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-black/[0.06]"
                    }`}
                  >
                    <span className="relative z-10">{item}</span>
                    <div
                      className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        darkMode
                          ? "bg-gradient-to-r from-white/[0.05] to-white/[0.02]"
                          : "bg-gradient-to-r from-black/[0.03] to-black/[0.01]"
                      }`}
                    ></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                  darkMode
                    ? "bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.12]"
                    : "bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.06] hover:border-black/[0.1]"
                }`}
                style={{
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="relative z-10">
                  {darkMode ? (
                    <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-12" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 group-hover:-rotate-12" />
                  )}
                </div>
                <div
                  className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode
                      ? "bg-gradient-to-br from-amber-400/[0.1] to-orange-400/[0.05]"
                      : "bg-gradient-to-br from-blue-400/[0.08] to-purple-400/[0.04]"
                  }`}
                ></div>
              </button>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block">
                <button
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group overflow-hidden ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode
                        ? "bg-gradient-to-r from-gray-100 to-white"
                        : "bg-gradient-to-r from-gray-800 to-black"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden relative p-2.5 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08]"
                    : "bg-black/[0.04] hover:bg-black/[0.08] border border-black/[0.06]"
                }`}
                style={{
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="relative w-4 h-4">
                  <span
                    className={`absolute left-0 top-0 w-4 h-0.5 rounded-full transition-all duration-300 ${
                      darkMode ? "bg-white" : "bg-black"
                    } ${
                      menuOpen ? "rotate-45 top-1.5" : "top-0"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-1.5 w-4 h-0.5 rounded-full transition-all duration-300 ${
                      darkMode ? "bg-white" : "bg-black"
                    } ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 top-3 w-4 h-0.5 rounded-full transition-all duration-300 ${
                      darkMode ? "bg-white" : "bg-black"
                    } ${
                      menuOpen ? "-rotate-45 top-1.5" : "top-3"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{
            background: darkMode 
              ? 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(10,10,10,0.98) 100%)'
              : 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.98) 100%)',
            backdropFilter: 'blur(32px) saturate(180%)',
            WebkitBackdropFilter: 'blur(32px) saturate(180%)',
            borderBottom: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="space-y-1">
              {["Home", "Skills", "Projects", "Credentials", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    darkMode
                      ? "text-gray-200 hover:text-white hover:bg-white/[0.06]"
                      : "text-gray-700 hover:text-gray-900 hover:bg-black/[0.04]"
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-white/[0.08]">
                <button
                  className={`w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    darkMode
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Professional Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated gradient orbs */}
        <div
          className="absolute opacity-40"
          style={{
            top: '10%',
            left: '10%',
            width: '600px',
            height: '600px',
            background: darkMode 
              ? 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(147,51,234,0.02) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(147,51,234,0.04) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'drift-slow 40s ease-in-out infinite',
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
          }}
        ></div>
        
        <div
          className="absolute opacity-30"
          style={{
            bottom: '20%',
            right: '15%',
            width: '500px',
            height: '500px',
            background: darkMode 
              ? 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, rgba(59,130,246,0.02) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'drift-slow 50s ease-in-out infinite reverse',
            transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`
          }}
        ></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
              linear-gradient(90deg, ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)`,
            animation: 'grid-drift 120s linear infinite'
          }}
        ></div>

        {/* Noise texture for premium feel */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes drift-slow {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translate(30px, -20px) rotate(90deg) scale(1.05); 
          }
          50% { 
            transform: translate(-20px, 30px) rotate(180deg) scale(0.95); 
          }
          75% { 
            transform: translate(-30px, -30px) rotate(270deg) scale(1.02); 
          }
        }
        
        @keyframes grid-drift {
          0% { 
            transform: translate(0, 0); 
          }
          100% { 
            transform: translate(-80px, -80px); 
          }
        }
      `}</style>

      {/* Main Content */}
      <div
        className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 pt-20"
        onMouseMove={handleMouseMove}
      >
        {/* Left Content */}
        <div
          className={`flex-1 max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                darkMode
                  ? "bg-green-900/50 border border-green-700 text-green-300"
                  : "bg-green-50 border border-green-200 text-green-700"
              }`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className={`text-4xl lg:text-6xl font-bold leading-tight transition-all duration-500 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Aspiring
                <span
                  className={`block bg-clip-text text-transparent transition-all duration-500 ${
                    darkMode
                      ? "bg-gradient-to-r from-white via-gray-200 to-gray-300"
                      : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600"
                  }`}
                >
                  Back-end Developer
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-lg leading-relaxed max-w-xl transition-all duration-500 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building innovative web solutions and
              transforming data into meaningful insights. Let's create something
              amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className={`group relative px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  darkMode
                    ? "bg-gradient-to-r from-white to-gray-200 text-gray-900 hover:shadow-white/25"
                    : "bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:shadow-gray-500/25"
                }`}
              >
                <span className="relative z-10">View My Work</span>
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode
                      ? "bg-gradient-to-r from-gray-200 to-white"
                      : "bg-gradient-to-r from-gray-700 to-gray-900"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Profile Image Container */}
            <div className="relative group">
              <div
                className={`absolute -inset-4 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-all duration-300 ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400"
                    : "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100"
                }`}
              ></div>
              <div
                className={`relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
                  darkMode
                    ? "border border-gray-700 bg-gray-800"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {/* Your Profile Image */}
                <img
                  src={bgimg}
                  alt="Ivan's Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className={`absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce delay-1000 shadow-lg ${
                darkMode ? "bg-gray-300" : "bg-gray-700"
              }`}
            ></div>
            <div
              className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-bounce delay-2000 shadow-lg ${
                darkMode ? "bg-gray-400" : "bg-gray-600"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div
        className={`relative z-10 pb-20 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2
            className={`text-2xl lg:text-3xl font-bold mb-4 transition-all duration-500 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Technologies & Tools
          </h2>
          <p
            className={`transition-all duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Languages and frameworks I work with
          </p>
        </div>

        {/* Smooth Animated Logo Carousel */}
        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 group">
                <div className="relative">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden border-2 shadow-sm ${
                      darkMode
                        ? "bg-gray-800 border-gray-600 text-gray-200"
                        : "bg-white border-gray-200 text-gray-700"
                    }`}
                    style={{
                      borderColor: darkMode ? logo.darkColor : logo.color,
                    }}
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      backgroundColor: darkMode ? logo.darkColor : logo.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 45s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
       <section id="skills" className="relative py-20 px-6 lg:px-12 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/6 w-64 h-64 rounded-full blur-3xl animate-pulse ${
            darkMode ? "bg-gray-700/20" : "bg-gray-200/30"
          }`}></div>
          <div className={`absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
            darkMode ? "bg-gray-600/20" : "bg-gray-300/30"
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-500 ${
              darkMode
                ? "bg-blue-900/50 border border-blue-700 text-blue-300"
                : "bg-blue-50 border border-blue-200 text-blue-700"
            }`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Technical Expertise
            </div>

            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Skills &{' '}
              <span className={`bg-clip-text text-transparent transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-white via-gray-200 to-gray-300"
                  : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600"
              }`}>
                Capabilities
              </span>
            </h2>

            <p className={`text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Here are some key skills that I have developed as an IT student, 
              building a strong foundation for innovative web solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 delay-${index * 100} ${
                    isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* Card Background Glow */}
                  <div className={`absolute -inset-1 rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-300 ${
                    darkMode
                      ? "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400"
                      : "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100"
                  }`}></div>

                  {/* Main Card */}
                  <div className={`relative p-8 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border ${
                    darkMode
                      ? "bg-gray-800/80 backdrop-blur-md border-gray-700/50 hover:border-gray-600"
                      : "bg-white/80 backdrop-blur-md border-gray-200/50 hover:border-gray-300"
                  }`}>
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          darkMode ? "bg-gray-700" : "bg-gray-100"
                        }`}
                        style={{
                          borderColor: darkMode ? skill.darkColor : skill.color,
                          borderWidth: '2px',
                          borderStyle: 'solid'
                        }}
                      >
                        <IconComponent
                          className="w-8 h-8"
                          style={{
                            color: darkMode ? skill.darkColor : skill.color
                          }}
                        />
                      </div>
                      
                      {/* Icon Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{
                          backgroundColor: darkMode ? skill.darkColor : skill.color,
                        }}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold transition-all duration-300 ${
                        darkMode ? "text-white group-hover:text-gray-100" : "text-gray-900 group-hover:text-gray-800"
                      }`}>
                        {skill.title}
                      </h3>
                      <p className={`leading-relaxed transition-all duration-300 ${
                        darkMode ? "text-gray-300 group-hover:text-gray-200" : "text-gray-600 group-hover:text-gray-700"
                      }`}>
                        {skill.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                      darkMode ? "bg-gray-600 group-hover:bg-gray-500" : "bg-gray-300 group-hover:bg-gray-400"
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`group relative px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? "bg-gradient-to-r from-white to-gray-200 text-gray-900 hover:shadow-white/25"
                  : "bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:shadow-gray-500/25"
              }`}>
                <span className="relative z-10">View My Projects</span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-200 to-white"
                    : "bg-gradient-to-r from-gray-700 to-gray-900"
                }`}></div>
              </button>
              <button className={`px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "border-gray-600 text-gray-200 bg-gray-900 hover:bg-gray-800 hover:border-gray-500"
                  : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400"
              }`}>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CombinedNavbarBanner;
