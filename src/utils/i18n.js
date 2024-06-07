import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    lng: 'es',
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  }, function(err, t) {
    if (err) return console.error('Error initializing i18next:', err);
    console.log('i18next initialized successfully with language:', i18n.language);
  });

export default i18n;
