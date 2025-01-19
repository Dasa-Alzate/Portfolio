import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DarkToggle = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      console.log("#");
      document.querySelector("html").classList.add("dark");
      console.log("Darkmode: ", darkMode);
      console.log("&");
    } else {
      console.log("%");
      document.querySelector("html").classList.remove("dark");
      console.log("Darkmode: ", darkMode);
      console.log("$");
    }
  }, [darkMode]);

  return (
    <div className="ml-auto me-3 group" onClick={() => setDarkMode(!darkMode)}>
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative group-hover:scale-110 transition-all duration-200">
          <input type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden" checked={darkMode} onChange={() => setDarkMode((prev) => !prev)}/>
          <div className="block dark:bg-sky-800/50 bg-slate-500/75 rounded-full w-14 h-8"></div>
          <div className="top-1 left-1 absolute dark:bg-sky-600/30 bg-slate-700/75 rounded-full w-6 h-6 transition dot"></div>
        </div>
        <p className="block md:hidden lg:block ml-3 text-gray-500 group-hover:text-gray-200">{t('navbar.dark-mode')}</p>
      </label>
    </div>
  );
};

export default DarkToggle;
