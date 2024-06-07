import React from 'react';
import { DarkModeSwitch } from '../DarkModeSwitch/DarkModeSwitch';
import { LangSwitch } from '../LangSwitch/LangSwitch';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="relative flex items-center justify-start bg-black/75 backdrop-blur-sm px-4 py-2 w-full md:w-auto min-w-max" aria-label="Global">
      <div className="flex flex-grow-0 flex-shrink-0 items-center ml-2">
        <div className="flex items-center justify-between w-auto">
          <a href="#">
            <span className="sr-only">David</span>
            <img alt="David" className="w-auto h-14 grayscale" src="/src/assets/logo4.png" />
          </a>
        </div>
      </div>
      <div id="navbar" className="flex w-full text-base text-gray-500 uppercase typo-advent">
        <a href="#Inicio" className="sm:block mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 hover:text-gray-200">{t('navbar.title-1')}</a>
        <a href="#about" className="sm:block mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 hover:text-gray-200">{t('navbar.title-2')}</a>
        <a href="#work-education" className="sm:block mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 hover:text-gray-200">{t('navbar.title-3')}</a>
        <a href="#projects" className="sm:block mx-auto lg:mx-12 sm:px-4 md:px-8 lg:px-0 hover:text-gray-200">{t('navbar.title-4')}</a>
        <LangSwitch />
        <DarkModeSwitch />
      </div>
    </nav>
  );
}

export default NavBar;