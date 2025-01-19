import React from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitch from './LangSwitch';
import DarkToggle from './DarkToggle';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-30 ml-0 pt-6  pl-0">
      <nav className="relative flex items-center justify-start bg-black/75 backdrop-blur-sm px-4 py-2 w-full md:w-3/4 min-w-max" aria-label="Global">
        <div className="flex flex-grow-0 flex-shrink-0 items-center ml-2">
          <div className="flex items-center justify-between w-auto">
            <a href="#">
              <span className="sr-only">David</span>
              <img alt="David" className="w-auto h-14 grayscale" src="assets/logo4.png" />
            </a>
          </div>
        </div>
        <div id="navbar" className="flex w-full items-center text-base text-gray-500 uppercase typo-advent">
          <a href="#Inicio"
            className="hidden md:block w-fit mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 h-fit w-20 md:text-nowrap hover:text-gray-200">{t('navbar.title-1')}</a>

          <a href="#about"
            className="hidden md:block w-fit mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 h-fit w-20 md:text-nowrap hover:text-gray-200">{t('navbar.title-2')}</a>

          <a href="#work-education"
            className="hidden md:block w-fit mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 h-fit w-20 md:text-nowrap hover:text-gray-200">{t('navbar.title-3')}</a>

          <a href="#projects"
            className="hidden md:block w-fit mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 h-fit w-20 md:text-nowrap hover:text-gray-200">{t('navbar.title-4')}</a>

          <a href="#" className="ml-auto mr-2 h-10 hover:brightness-125 transition-all duration-200">
            <LangSwitch />
          </a>
        
          <div className="flex w-fit">
            <DarkToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar