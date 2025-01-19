import React, { useState, useContext } from 'react';
import { I18nContext } from '../context/I18nContext';
import i18next from 'i18next';

const LangSwitch = () => {
  const { toggleLanguage, language } = useContext(I18nContext);
  const [isOpen, setIsOpen] = useState(false);
  const [chosenLang, setChosenLang] = useState(language);

  const handleLangChange = (lang) => {
    if (chosenLang === lang) return;

    setChosenLang(lang);
    i18next.changeLanguage(lang, (err, t) => {
      if (!err) {
        console.log(`${lang} chosen`);
      }
    });
  };

  const toggleContainer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-0 h-full chooseLang" onClick={toggleContainer}>
      <div className={`w-20 ${isOpen ? 'open' : ''}`}>
        <span
          id="es-lang"
          className={`es-lang lang ${chosenLang === 'es' ? 'chosen' : ''}`}
          onClick={() => handleLangChange('es')}
        ></span>
        <span
          id="en-lang"
          className={`en-lang lang ${chosenLang === 'en' ? 'chosen' : ''}`}
          onClick={() => handleLangChange('en')}
        ></span>
      </div>
    </div>
  );
};

export default LangSwitch;
