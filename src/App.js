import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PicturesSection from './components/Pictures';
import Footer from './components/Footer';
import LanguagesSec from './components/Languages';
import CredentialsGrid from './components/CredentialsGrid';
import { ThemeProvider } from './contexts/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <ThemeProvider>
    <div className="App" id="home">
      <Banner />
      <Projects />
      <CredentialsGrid />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
