import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(true);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (darkMode) {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [darkMode]);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        document.querySelector("html").classList.toggle("dark");
    };

    return (
        <div className="flex w-full">
            <div className="ml-auto">
                <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input
                            type="checkbox"
                            name="dark-mode"
                            id="dark-toggle"
                            className="checkbox hidden"
                            onChange={handleDarkModeToggle}
                            checked={darkMode}
                        />
                        <div className="block bg-teal-800/50 dark:bg-zinc-400 rounded-full w-14 h-8"></div>
                        <div className="top-1 left-1 absolute bg-teal-600/30 dark:bg-gray-500 rounded-full w-6 h-6 transition dot"></div>
                    </div>
                    <p className="ml-3 text-gray-500 hover:text-gray-200 dark:text-white">{t('navbar.dark-mode')}</p>
                </label>
            </div>
        </div>
    );
}

export {DarkModeSwitch};
