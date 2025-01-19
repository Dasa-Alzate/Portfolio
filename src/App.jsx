import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ScrollToTop from './components/ScrollToTop';
import { I18nProvider } from './context/I18nContext';

import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [modal, setModal] = useState(0);

  return (
    <I18nProvider>
        <Hero />
        <About />
        <Experience />
        <Projects setModal={setModal} />
        <Footer />
        <Modal modal={modal} setModal={setModal} />
        <ScrollToTop />
    </I18nProvider>
  );
};

export default App;
