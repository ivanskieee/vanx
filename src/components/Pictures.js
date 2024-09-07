import React from 'react';
import pic1 from './pics/van.jpg';
import pic2 from './pics/van2.jpg';
import pic3 from './pics/van3.jpg';

const Pictures = () => {
  return (
    <section id="picturessection" className="pictures text-center py-20 bg-gray-200 px-4 md:px-10">
      <h1 className="text-4xl font-bold mb-10"></h1>
      <blockquote className="text-lg text-gray-700 italic mb-10">
        "The best thing about a picture is that it never changes, even when the people in it do." - Andy Warhol
      </blockquote>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative rounded-lg overflow-hidden">
          <img src={pic1} alt="TITO VIBES" className="w-full h-full object-cover" />
          <div className="overlay absolute inset-0 bg-transparent hover:bg-gray-600 transition-all duration-300 flex justify-center items-center opacity-0 hover:opacity-100">
            <h3 className="text-2xl font-semibold text-white">TITO VIBES</h3>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img src={pic2} alt="SUMMER VIBES" className="w-full h-full object-cover" />
          <div className="overlay absolute inset-0 bg-transparent hover:bg-gray-600 transition-all duration-300 flex justify-center items-center opacity-0 hover:opacity-100">
            <h3 className="text-2xl font-semibold text-white">SUMMER VIBES</h3>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <img src={pic3} alt="CASUAL VIBES" className="w-full h-full object-cover" />
          <div className="overlay absolute inset-0 bg-transparent hover:bg-gray-600 transition-all duration-300 flex justify-center items-center opacity-0 hover:opacity-100">
            <h3 className="text-2xl font-semibold text-white">CASUAL VIBES</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pictures;
