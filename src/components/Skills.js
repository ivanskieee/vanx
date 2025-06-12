import React, { useState, useEffect } from 'react';
import { Code, Database, GitBranch, Wrench, BarChart3, Lightbulb } from 'lucide-react';

const Skills = ({ darkMode = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const themeClasses = darkMode
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    : "bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900";

  return (
    <section
      id="skills"
      className={`relative py-20 px-6 lg:px-12 overflow-hidden transition-all duration-500 ${themeClasses}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-1/6 w-64 h-64 rounded-full blur-3xl animate-pulse ${
            darkMode ? "bg-gray-700/20" : "bg-gray-200/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 ${
            darkMode ? "bg-gray-600/20" : "bg-gray-300/30"
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-500 ${
              darkMode
                ? "bg-blue-900/50 border border-blue-700 text-blue-300"
                : "bg-blue-50 border border-blue-200 text-blue-700"
            }`}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            Technical Expertise
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills &{' '}
            <span
              className={`bg-clip-text text-transparent transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-white via-gray-200 to-gray-300"
                  : "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600"
              }`}
            >
              Capabilities
            </span>
          </h2>

          <p
            className={`text-lg leading-relaxed max-w-3xl mx-auto transition-all duration-500 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
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
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Card Background Glow */}
                <div
                  className={`absolute -inset-1 rounded-2xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-300 ${
                    darkMode
                      ? "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400"
                      : "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100"
                  }`}
                ></div>

                {/* Main Card */}
                <div
                  className={`relative p-8 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border ${
                    darkMode
                      ? "bg-gray-800/80 backdrop-blur-md border-gray-700/50 hover:border-gray-600"
                      : "bg-white/80 backdrop-blur-md border-gray-200/50 hover:border-gray-300"
                  }`}
                >
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
                    <h3
                      className={`text-xl font-semibold transition-all duration-300 ${
                        darkMode ? "text-white group-hover:text-gray-100" : "text-gray-900 group-hover:text-gray-800"
                      }`}
                    >
                      {skill.title}
                    </h3>
                    <p
                      className={`leading-relaxed transition-all duration-300 ${
                        darkMode ? "text-gray-300 group-hover:text-gray-200" : "text-gray-600 group-hover:text-gray-700"
                      }`}
                    >
                      {skill.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div
                    className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                      darkMode ? "bg-gray-600 group-hover:bg-gray-500" : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`group relative px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? "bg-gradient-to-r from-white to-gray-200 text-gray-900 hover:shadow-white/25"
                  : "bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:shadow-gray-500/25"
              }`}
            >
              <span className="relative z-10">View My Projects</span>
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
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;