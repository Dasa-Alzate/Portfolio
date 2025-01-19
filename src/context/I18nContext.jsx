import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../locales/en/translation.json';
import esTranslations from '../locales/es/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || 'es');

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
