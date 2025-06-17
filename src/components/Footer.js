import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/Brilata.Ivan",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://x.com/ChubbyxGwapo",
      color: "hover:text-sky-500",
      bgColor: "hover:bg-sky-50",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/ivannskieee/",
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-50",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/ivan-brilata-b189b0283/",
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/ivanskieee",
      color: "hover:text-gray-800",
      bgColor: "hover:bg-gray-50",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
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
                className={`group flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg text-gray-600 transition-all duration-200 ${social.color} ${social.bgColor} hover:border-current`}
                aria-label={`Connect on ${social.name}`}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-8"></div>

          {/* Copyright */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Crafted with care by{" "}
              <span className="font-semibold text-gray-900">ivanskieee</span>
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>© 2024 Ivan Brilata</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>Professional Portfolio</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;