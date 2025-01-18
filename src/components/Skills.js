import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills text-center py-20 px-4 md:px-10 bg-white"
      style={{
        color: 'black',
      }}
    >
      <h1 className="text-4xl font-bold mb-10">Skills</h1>
      <p className="text-lg mb-10">Here are some key skills that I have developed as an IT student:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>Working knowledge of HTML, CSS, JavaScript, PHP, Ruby and Python for 
          creating responsive websites.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>Familiar with using SQL and database management systems like MySQL.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>Proficient in using Ruby on Rails in developing an application, especially a web application.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>Proficient in using Git for version control and collaboration on software projects.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>Basic knowledge in analyzing data sets.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2"></h3>
          <p>Adept at troubleshooting technical issues and finding innovative solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
