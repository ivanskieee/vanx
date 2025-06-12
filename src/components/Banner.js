import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
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

  const themeClasses = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    : "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900";

  const navbarClasses = darkMode
    ? "bg-black/80 backdrop-blur-md border-gray-700/50 text-white"
    : "bg-white/80 backdrop-blur-md border-gray-200/50 text-gray-800";

  const sidebarClasses = darkMode
    ? "bg-gray-900/95 backdrop-blur-md border-gray-700/50"
    : "bg-white/95 backdrop-blur-md border-gray-200/50";

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${themeClasses}`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 flex justify-between items-center py-4 px-6 ${navbarClasses} font-sans shadow-sm transition-all duration-500`}
      >
        <div className="relative flex items-center ml-5">
          <span
            className={`text-2xl font-bold transition-all duration-500 ${
              darkMode
                ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            Ivan Brilata
          </span>
        </div>

        {/* Dark/Light Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-all duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-6 text-lg ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            <li
              className={`transition-colors duration-300 px-4 py-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-800 hover:text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`transition-colors duration-300 px-4 py-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-800 hover:text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className={`transition-colors duration-300 px-4 py-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-800 hover:text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={`transition-colors duration-300 px-4 py-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-800 hover:text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <a href="#credentials">Credentials</a>
            </li>
            <li
              className={`transition-colors duration-300 px-4 py-2 rounded-lg ${
                darkMode
                  ? "hover:bg-gray-800 hover:text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              className={`transition-colors duration-300 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 ${sidebarClasses} text-left transition-all duration-500 z-40 shadow-xl ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-6">
            <button
              className={`mb-8 transition-colors duration-300 ${
                darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul
              className={`space-y-6 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <li
                className={`transition-colors duration-300 px-4 py-3 rounded-lg text-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <a href="#home" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li
                className={`transition-colors duration-300 px-4 py-3 rounded-lg text-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <a href="#skills" onClick={toggleMenu}>
                  Skills
                </a>
              </li>
              <li
                className={`transition-colors duration-300 px-4 py-3 rounded-lg text-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li
                className={`transition-colors duration-300 px-4 py-3 rounded-lg text-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <a href="#credentials" onClick={toggleMenu}>
                  Credentials
                </a>
              </li>
              <li
                className={`transition-colors duration-300 px-4 py-3 rounded-lg text-lg ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle floating shapes */}
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse ${
            darkMode ? "bg-gray-700/20" : "bg-gray-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            darkMode ? "bg-gray-600/20" : "bg-gray-300/30"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse delay-2000 ${
            darkMode ? "bg-gray-500/20" : "bg-gray-400/30"
          }`}
        ></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 1px, transparent 0)`,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 10}px, ${
              mousePosition.y * 10
            }px)`,
          }}
        ></div>
      </div>

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
              <button
                className={`px-8 py-4 border-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "border-gray-600 text-gray-200 bg-gray-900 hover:bg-gray-800 hover:border-gray-500"
                    : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                Get In Touch
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
    </div>
  );
};

export default CombinedNavbarBanner;
