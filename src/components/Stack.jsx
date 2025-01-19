import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import StackIcon from './StackIcon';

function Stack() {
  const { t } = useTranslation();
  const stack = t('stack.stack', { returnObjects: true });
  const [bgIcon, setBgIcon] = useState( "" );

  return (
    <div id="stack" className="relative z-10 bg-gradient-to-br from-10% from-cyan-700 via-sky-400 to-sky-500 overflow-hidden">
      <div className="bg-transparent py-10 hover:text-white transition duration-800 group">
        <h2 className="mx-auto pt-4 w-fit text-2xl text-center section-title typo-quicksand">{t('stack.title')}</h2>
        <div className="flex flex-wrap justify-center mx-auto px-4 w-full h-full container">
          { stack.map((icon, i) => (<StackIcon key={i} icon={icon} setBgIcon={setBgIcon} />)) }
        </div>
        <img id="bg-logo-layer" className={"absolute z-20 bottom-2 md:-bottom-32 lg:top-4 -right-2 md:-right-32 invert flex-initial m-6 mix-blend-soft-light transition h-1/2 md:h-auto md:w-1/2 " + (bgIcon == "" ? "opacity-0" : "opacity-50")} src={bgIcon} width="512" height="384"/>
      </div>
    </div>
  )
}

export default Stack