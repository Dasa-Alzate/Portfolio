import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-neutral-100 dark:bg-neutral-900 h-84 typo-quicksand">
      <h2 className="mx-auto pt-14 w-fit text-3xl text-center section-title typo-quicksand">{t('about.title')}</h2>
      <br/>
      <figure className="bg-neutral-100 dark:bg-neutral-900 p-8">
        <img
          className="mx-auto rounded-full w-32 h-32"
          src="assets/avatar.png"
          alt=""
          width="512"
          height="384"
        />
        <div className="pt-6 grid grid-cols-1 justify-items-center justify-center text-center space-y-4">
          <div className="z-20 text-lg max-w-3xl md:max-w-3xl lg:max-w-5xl relative">
            <p className="mt-4 text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('about.resume') }}></p>
          </div>
          <figcaption className="font-semibold">
            <div className="text-sky-500">David Sánchez</div>
            <div className="text-slate-500">{t('about.role')}</div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
};

export default About;
