import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './components/Hero/Header/Header';
import MainTitle from './components/Hero/MainTitle/MainTitle';
import './utils/i18n';

const App = () => {
  return (
    <div id="Inicio">
      <div className="mx-auto">
        <div className="bg-gradient-to-b from-[#006B58] to-[#001E1E] relative z-10 bg-cover bg-bottom w-full h-screen min-h-[40rem]">
          <div className="absolute bottom-0 right-0 z-10 transition-opacity bg-gradient-to-b from-[#82B8C4] to-[#98CAD3] opacity-100 dark:opacity-0 duration-500 bg-cover bg-bottom w-full h-screen min-h-[40rem]"></div>
          <img src="/src/assets/bg-avatar.png" className="absolute bottom-0 z-20 right-0 h-5/6 lg:h-4/5" alt="Avatar" />

          <Header />
          <MainTitle />
        </div>
      </div>
    </div>
  );
}

export default App;
