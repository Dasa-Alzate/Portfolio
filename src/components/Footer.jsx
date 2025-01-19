import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col p-8 md:p-20 bg-neutral-200 dark:bg-neutral-950">
      <p className="w-full lg:w-2/3 text-center lg:text-left" data-i18n="footer">Este sitio ha sido construido con Vite, potenciado por React y estilizado con Tailwind CSS.</p>
      <p className="w-full lg:w-2/3 text-center lg:text-left">Es un honor tenerte aquí. Quédate tanto como quieras.
      </p>
    </footer>
  );
};

export default Footer;
