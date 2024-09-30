import React, { useState } from 'react';
import imahe1 from './pics/img1.png';
import imahe2 from './pics/img2.png';
import imahe3 from './pics/hotel_bookingbrilata.png';
import imahe4 from './pics/tourismbrilatapackage_deals.png';
import imahe5 from './pics/img3.png';
import imahe6 from './pics/img4.png';
import vid1 from './pics/snake.mp4';
import vid2 from './pics/44.mp4';
import vid3 from './pics/cnc.mp4';
import vid4 from './pics/eval.mp4';
// Import other video files similarly if available

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null); // State to track active video

  const projects = [
    {
      id: 1,
      title: 'Snake Game (GDevelop)',
      description: 'A classic snake game developed using GDevelop.',
      image: imahe1,
      video: vid1, // Path to your video
    },
    {
      id: 2,
      title: 'One Piece Inspired Game (Greenfoot)',
      description: 'A game inspired by One Piece, developed using Greenfoot.',
      image: imahe2,
      video: vid2, // Ensure the path is correct
    },
    {
      id: 3,
      title: 'Hotel Booking Design',
      description: 'A conceptual design aimed at enhancing the user experience for hotel reservations and booking management.',
      image: imahe3,
    },
    {
      id: 4,
      title: 'Travel Card Outline',
      description: 'A structural outline for managing travel cards, transactions, and services in a seamless interface.',
      image: imahe4,
    },
    {
      id: 5,
      title: 'Cream and Cakes Inventory System',
      description: 'A system to manage inventory for a cream and cakes shop.',
      image: imahe6,
      video: vid3, // Ensure the path is correct
    },
    {
      id: 6,
      title: 'SPC Evaluation System',
      description: 'A system for Statistical Process Control (SPC) evaluation.',
      image: imahe5,
      video: vid4, // Ensure the path is correct
    },
  ];

  const handleMouseEnter = (id) => {
    if (id === 1 || id === 2 || id === 5 || id === 6) {
      setActiveVideo(id);
    }
  };

  const handleMouseLeave = () => {
    setActiveVideo(null);
  };

  return (
    <section id="projects" className="projects text-center py-20 px-4 md:px-10 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative" // Add relative positioning
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-black">{project.description}</p>
              </div>
              {/* Conditionally render video if active */}
              {activeVideo === project.id && project.video && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    className="w-full h-48 object-cover"
                    onEnded={() => setActiveVideo(null)} // Reset active video when it ends
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
