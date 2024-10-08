import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PicturesSection from './components/Pictures';
import Footer from './components/Footer';
import LanguagesSec from './components/Languages';
import CredentialsGrid from './components/CredentialsGrid';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <CredentialsGrid />
      <Footer />
    </div>
  );
}

export default App;
