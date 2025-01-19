import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroTitle from './HeroTitle';
import Navbar from './Navbar';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="Inicio" className="overflow-hidden min-h-[40rem]">
      <div className="mx-auto">
        <div className="bg-zinc-950 relative z-10 bg-cover bg-bottom w-full min-h-[40rem]">
          <div className="absolute top-0 right-0 z-10 transition-opacity bg-stone-200 opacity-100 dark:opacity-0 duration-500 bg-cover bg-bottom w-full min-h-[40rem]"></div>
          <img src="/assets/blob-dark.svg" className="absolute top-0 right-0 min-h-[40rem] hue-rotate-animation z-20"/>
          <img src="/assets/blob-dark.svg" className="absolute top-0 right-0 min-h-[40rem] noise-filter mix-blend-color-burn z-30"/>
          <svg className="absolute top-0 left-0">
            <filter id="grainy" name="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" result="turbulence" />
            </filter>
          </svg>

          {/* <!-- Navigation bar --> */}
          <Navbar />

          {/* <!-- Main title --> */}
          <HeroTitle />
          </div>
      </div>
    </section>
  );
};

export default Hero;
