import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 bg-neutral-300 dark:bg-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{t('about.title')}</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">{t('about.resume')}</p>
      </div>
    </section>
  );
};

export default About;
