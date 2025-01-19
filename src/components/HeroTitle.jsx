import React from 'react'

const HeroTitle = () => {
  return (
    <main className="w-full z-30 lg:w-3/5 h-full relative">
      <div id="profile" className="absolute backdrop-blur-sm bg-black/75 top-12 lg:top-24 lg:bottom-auto h-72 lg:h-96 lg:text-left min-h-72 mx-auto pt-10 px-4 sm:px-6 text-center w-full xl:px-8">
        <h1 className="font-bold text-4xl text-slate-800 sm:text-5xl md:text-6xl tracking-tight">
          <span className="text-white" data-i18n="profile.title-1">¡Hola! Soy </span>
          <span className="text-stone-500/75 dark:text-sky-800 typo-advent">David</span>
        </h1>
        <p className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-base text-gray-300 sm:text-lg md:text-xl transition-all duration-300" data-i18n="profile.title-2">
          Y este es mi portafolio.
        </p>
        <div id="contact-links" className="bottom-0 absolute inset-x-0 flex sm:justify-center xl:justify-end mt-5 sm:mt-8 mb-3">
          <div className="mx-auto h-10 mt-3 sm:mt-0">
            <a href="https://github.com/Dasa-Alzate"
              target="_blank"
              title="Visita mi GitHub"
              data-i18n-title="Visita mi GitHub"
              data-i18n="contact-links.github">
              <i className="bg-clip-text bg-gradient-to-br from-stone-500 to-slate-300/25 dark:from-sky-700 dark:to-indigo-300/25 to-70% mx-auto mt-auto mb-4 text-2xl text-white hover:text-4xl hover:text-transparent duration-300 bi bi-github"></i>
            </a>
          </div>
          <div className="mx-auto h-10 mt-3 sm:mt-0">
            <a href="https://www.linkedin.com/in/Dasa-Alzate"
              target="_blank"
              title="Echa un vistazo a mi LinkedIn"
              data-i18n-title="Echa un vistazo a mi LinkedIn"
              data-i18n="contact-links.linkedin">
              <i className="bg-clip-text bg-gradient-to-br from-stone-500 to-slate-300/25 dark:from-sky-700 dark:to-indigo-300/25 to-70% mx-auto mt-auto mb-4 text-2xl text-white hover:text-4xl hover:text-transparent duration-300 bi bi-linkedin"></i>
            </a>
          </div>
          <div className="mx-auto h-10 mt-3 sm:mt-0">
            <a href="mailto:dasa.alzate@gmail.com"
              target="_blank"
              title="Escríbeme por correo"
              data-i18n-title="Escríbeme por correo"
              data-i18n="contact-links.email">
              <i className="bg-clip-text bg-gradient-to-br from-stone-500 to-slate-300/25 dark:from-sky-700 dark:to-indigo-300/25 to-70% mx-auto mt-auto mb-4 text-2xl text-white hover:text-4xl hover:text-transparent duration-300 bi bi-envelope"></i>
            </a>
          </div>
          <div className="mx-auto h-10 mt-3 sm:mt-0">
            <a href="https://wa.me/34604461105"
              target="_blank"
              title="Hablemos por Whatsapp"
              data-i18n-title="Hablemos por Whatsapp"
              data-i18n="contact-links.whatsapp">
              <i className="bg-clip-text bg-gradient-to-br from-stone-500 to-slate-300/25 dark:from-sky-700 dark:to-indigo-300/25 to-70% mx-auto mt-auto mb-4 text-2xl text-white hover:text-4xl hover:text-transparent duration-300 bi bi-whatsapp"></i>
            </a>
          </div>
          <div className="mx-auto h-10 mt-3 sm:mt-0">
            <a href="CV - David Sánchez.pdf"
              target="_blank"
              title="Descarga mi CV"
              data-i18n-title="Descarga mi CV"
              data-i18n="contact-links.file">
              <i className="bg-clip-text bg-gradient-to-br from-stone-500 to-slate-300/25 dark:from-sky-700 dark:to-indigo-300/25 to-70% mx-auto mt-auto mb-4 text-2xl text-white hover:text-4xl hover:text-transparent duration-300 bi bi-file-earmark-text"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroTitle