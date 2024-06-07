import React from 'react';
import { ContactLink } from '../ContactLink/ContactLink';

const MainTitle = () => {
  return (
    <main className="w-full z-30 lg:w-3/5 h-full relative">
      <div id="profile" className="absolute backdrop-blur-sm bg-black/75 bottom-0 md:bottom-3 lg:top-24 lg:bottom-auto h-72 lg:h-96 lg:text-left min-h-72 mx-auto pt-10 px-4 sm:px-6 text-center w-full xl:px-8">
        <h1 className="font-bold text-4xl text-slate-800 sm:text-5xl md:text-6xl tracking-tight">
          <span className="block text-white xl:inline transition-all duration-300">¡Hola! Soy </span>
          <span className="block text-teal-800 xl:inline typo-advent">David</span>
        </h1>
        <p className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-base text-gray-300 sm:text-lg md:text-xl transition-all duration-300">
          Y este es mi portafolio.
        </p>
        <div id="contact-links" className="bottom-0 absolute inset-x-0 flex sm:justify-center xl:justify-end mt-5 sm:mt-8 mb-3">
          <ContactLink
            href = "https://github.com/Whitefox-SA" 
            title = "Visita mi GitHub" 
            iconName= "bi-github"
          />
          <ContactLink
            href = "https://www.linkedin.com/in/Dasa-Alzate" 
            title = "Echa un vistazo a mi LinkedIn" 
            iconName= "bi-linkedin"
          />
          <ContactLink
            href = "mailto:dasa.alzate@gmail.com" 
            title = "Escríbeme por correo" 
            iconName= "bi-envelope"
          />
          <ContactLink
            href = "https://wa.me/34604461105" 
            title = "Hablemos por Whatsapp" 
            iconName= "bi-whatsapp"
          />
          <ContactLink
            href = "CV - David Sánchez.pdf" 
            title = "Descarga mi CV" 
            iconName= "bi-file-earmark-text"
          />
        </div>
      </div>
    </main>
  );
}

export default MainTitle;
