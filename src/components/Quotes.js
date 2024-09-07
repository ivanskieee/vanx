import React from 'react';
import BGBG from './pics/darkk.png';

const Quotes = () => {
  return (
    <section
      id="quotessection"
      className="quotes text-center py-20 px-4 md:px-10"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(34, 34, 34, 0.8)), url(${BGBG})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Add this line for parallax effect
        backgroundBlendMode: 'overlay',
        color: 'white',
      }}
    >
      <h1 className="text-4xl font-bold mb-10">Inspiring Quotes</h1>
      <blockquote className="text-lg italic mb-10">
        "As soon as you trust yourself, you will know how to live." -- Johann Wolfgang von Goethe
      </blockquote>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Style</h3>
          <p>"Being happy never goes out of style."</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Dream</h3>
          <p>"Dream big. Start small. But most of all, start." ― Simon Sinek</p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Possibility</h3>
          <p>"Anything is possible when you have a path, a plan, and a desire to take action." – Dean Graziosi</p>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
