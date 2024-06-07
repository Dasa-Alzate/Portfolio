import React, { useState, useEffect } from 'react';
import i18next from 'i18next'; // Asegúrate de importar i18next
import './LangSwitch.css';

const LangSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('es');

  const changeLang = (lang) => {
    if (selectedLang !== lang) {
      setSelectedLang(lang);
      i18next.changeLanguage(lang, (err, t) => {
        if (err) return console.error('Error changing language:', err);
        console.log(`${lang} chosen`);
      });
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.querySelectorAll('.lang').forEach(span => {
      span.classList.remove('chosen');
    });
    document.querySelector(`#${selectedLang}-lang`).classList.add('chosen');
  }, [selectedLang]);

  return (
    <div className="mx-auto h-10">
      <div className={`m-0 h-full chooseLang ${isOpen ? 'open' : ''}`}>
        <div>
          <span id="es-lang" className="es-lang lang" onClick={() => changeLang('es')}></span>
          <span id="en-lang" className="en-lang lang" onClick={() => changeLang('en')}></span>
        </div>
      </div>
    </div>
  );
};

export { LangSwitch };
