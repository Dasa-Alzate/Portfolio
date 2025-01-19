import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LightBox from './components/LightBox';
import Modal from './components/Modal';
import ScrollToTop from './components/ScrollToTop';
import { I18nProvider } from './context/I18nContext';

const App = () => {
  return (
    <I18nProvider>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Footer />
        <LightBox />
        <Modal />
        <ScrollToTop />
    </I18nProvider>
  );
};

export default App;
