import React from 'react';
import imahe1 from './pics/img1.png';
import imahe2 from './pics/img2.png';
import imahe3 from './pics/hotel_bookingbrilata.png';
import imahe4 from './pics/tourismbrilatapackage_deals.png';
import imahe5 from './pics/img3.png';
import imahe6 from './pics/img4.png';
import BGBG from './pics/darkk.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Snake Game (GDevelop)',
      description: 'A classic snake game developed using GDevelop.',
      image: imahe1,
    },
    {
      id: 2,
      title: 'One Piece Inspired Game (Greenfoot)',
      description: 'A game inspired by One Piece, developed using Greenfoot.',
      image: imahe2,
    },
    {
      id: 3,
      title: 'Hotel Booking System',
      description: 'An online system for booking hotel accommodations.',
      image: imahe3,
    },
    {
      id: 4,
      title: 'Travel Card Application',
      description: 'An application for managing travel cards and transactions.',
      image: imahe4,
    },
    {
      id: 5,
      title: 'Cream and Cakes Inventory System',
      description: 'A system to manage inventory for a cream and cakes shop.',
      image: imahe6,
    },
    {
      id: 6,
      title: 'SPC Evaluation System',
      description: 'A system for Statistical Process Control (SPC) evaluation.',
      image: imahe5,
    },
  ];

  return (
    <section
      id="projects"
      className="projects text-center py-20 px-4 md:px-10"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(34, 34, 34, 0.9), rgba(17, 17, 17, 0.9)), url(${BGBG})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        color: 'white',
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
