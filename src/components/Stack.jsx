import React from 'react'
import { useTranslation } from 'react-i18next';

function Stack() {
  const { t } = useTranslation();
  const stack = t('stack.stack', { returnObjects: true });

  return (
    <div id="stack" className="relative z-10 bg-gradient-to-br from-10% from-cyan-700 via-sky-400 to-sky-500 overflow-hidden">
      <div className="bg-transparent py-10 hover:text-white transition duration-800 group">
        <h2 className="mx-auto pt-4 w-fit text-2xl text-center section-title typo-quicksand" data-i18n="stack.title">{t('stack.title')}</h2>
        <div className="flex flex-wrap justify-center mx-auto px-4 w-full h-full container">
          { stack.map((icon, i) => (
            <img key={i} className="duration-800 z-30 flex-initial hover:!opacity-40 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src={icon.src} alt={icon.alt} title={icon.title} width="512" height="384"/>
          )) }
        </div>
        <img id="bg-logo-layer" className="absolute z-20 bottom-2 md:-bottom-32 lg:top-4 -right-2 md:-right-32 invert flex-initial m-6 mix-blend-soft-light transition opacity-0 h-1/2 md:h-auto md:w-1/2" src="" width="512" height="384"/>
      </div>
    </div>
  )
}

export default Stack