import React, { useState } from 'react';
import Modal from './Modal';
import picture1 from './pics/cert1.png';
import picture2 from './pics/cert2.png';
import picture3 from './pics/cert3.png';
import picture4 from './pics/cert4.jpg';

const credentials = [
  {
    title: '3rd iSITE Conference Developing Industry Skills & Technological Advancement through Research',
    year: '2023',
    image: picture4, // Replace with actual image paths
  },
  {
    title: 'iSITE’s 1st National Conference with the theme “AI Tools in Education”',
    year: '2023',
    image: picture1,
  },
  {
    title: 'Digital Imaging 101: Associating Digital Animation with Advertising',
    year: '2023',
    image: picture4,
  },
  {
    title: '“E-ffort: Put Forth a Successful Digital Folio”',
    year: '2023',
    image: picture4,
  },
  {
    title: 'International Multidisciplinary Research: “From a Languishing to a Flourishing Research Culture, through Collaboration”',
    year: '2022',
    image: picture3,
  },
  {
    title: '“Ctrl+Alt+Defend: Cybersecurity 101 for Students”',
    year: '2024',
    image: picture2,
  },
];

const CredentialsGrid = () => {
  const [selectedCredential, setSelectedCredential] = useState(null);

  return (
    <section id="credentials" className="credentials text-center py-20 bg-white px-4 md:px-10">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => setSelectedCredential(credential)}
            >
              <img
                src={credential.image}
                alt={credential.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">{credential.title}</h2>
              <p className="text-gray-600">{credential.year}</p>
            </div>
          ))}
        </div>
        {selectedCredential && (
          <Modal onClose={() => setSelectedCredential(null)}>
            <img
              src={selectedCredential.image}
              alt={selectedCredential.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{selectedCredential.title}</h2>
            <p className="text-gray-600 mb-4">{selectedCredential.year}</p>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default CredentialsGrid;
