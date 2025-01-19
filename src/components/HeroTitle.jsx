import React from 'react'
import { useTranslation } from 'react-i18next'

const HeroTitle = () => {
  const { t } = useTranslation();

  return (
    <main className="w-full z-30 lg:w-3/5 h-full relative">
      <div id="profile" className="absolute backdrop-blur-sm bg-black/75 top-12 lg:top-24 lg:bottom-auto h-72 lg:h-96 lg:text-left min-h-72 mx-auto pt-10 px-4 sm:px-6 text-center w-full xl:px-8">
        <h1 className="font-bold text-4xl text-slate-800 sm:text-5xl md:text-6xl tracking-tight">
          <span className="text-white">{ t('profile.title-1') }</span>
          <span className="text-stone-500/75 dark:text-sky-800 typo-advent"> David</span>
        </h1>
        <p className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-base text-gray-300 sm:text-lg md:text-xl transition-all duration-300">{ t('profile.title-2') }</p>
        <div id="contact-links" className="bottom-0 absolute inset-x-0 flex sm:justify-center xl:justify-end mt-5 sm:mt-8 mb-3">
                
          <div className="relative mx-auto mt-3 sm:mt-0 scale-75">
            <a href="https://github.com/Dasa-Alzate"
              className="link-container relative block group"
              target="_blank"
              title={ t('contact-links.github') }>
                <div className="link-icon bg-stone-500 dark:bg-stone-300 group-hover:bg-zinc-800"></div>
                <div className="icon">
                  <i className="bi bi-github"></i>
                </div>

              <svg viewBox="0 0 100 100" class="circle-text">
                <defs>
                  <path id="circlePathText" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                </defs>
                <text>
                  <textPath href="#circlePathText" startOffset="50%" text-anchor="middle">Github</textPath>
                </text>
              </svg>
            </a>
          </div>
          
          <div className="relative mx-auto mt-3 sm:mt-0 scale-75">
            <a href="https://www.linkedin.com/in/Dasa-Alzate"
              className="link-container relative block group"
              target="_blank"
              title={ t('contact-links.linkedin') }>
                <div className="link-icon bg-stone-500 dark:bg-stone-300 group-hover:bg-sky-900"></div>
                <div className="icon">
                  <i className="bi bi-linkedin"></i>
                </div>

              <svg viewBox="0 0 100 100" class="circle-text">
                <defs>
                  <path id="circlePathText" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                </defs>
                <text>
                  <textPath href="#circlePathText" startOffset="50%" text-anchor="middle">Linkedin</textPath>
                </text>
              </svg>
            </a>
          </div>
          
          <div className="relative mx-auto mt-3 sm:mt-0 scale-75">
            <a href="mailto:dasa.alzate@gmail.com"
              className="link-container relative block group"
              target="_blank"
              title={ t('contact-links.email') }>
                <div className="link-icon bg-stone-500 dark:bg-stone-300 group-hover:bg-amber-500"></div>
                <div className="icon">
                  <i className="bi bi-envelope"></i>
                </div>

              <svg viewBox="0 0 100 100" class="circle-text">
                <defs>
                  <path id="circlePathText" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                </defs>
                <text>
                  <textPath href="#circlePathText" startOffset="50%" text-anchor="middle">E-mail</textPath>
                </text>
              </svg>
            </a>
          </div>
          
          <div className="relative mx-auto mt-3 sm:mt-0 scale-75">
            <a href="https://wa.me/34604461105"
              className="link-container relative block group"
              target="_blank"
              title={ t('contact-links.whatsapp') }>
                <div className="link-icon bg-stone-500 dark:bg-stone-300 group-hover:bg-lime-600"></div>
                <div className="icon">
                  <i className="bi bi-whatsapp"></i>
                </div>

              <svg viewBox="0 0 100 100" class="circle-text">
                <defs>
                  <path id="circlePathText" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                </defs>
                <text>
                  <textPath href="#circlePathText" startOffset="50%" text-anchor="middle">Whatsapp</textPath>
                </text>
              </svg>
            </a>
          </div>
          
          <div className="relative mx-auto mt-3 sm:mt-0 scale-75">
            <a href="CV - David Sánchez.pdf"
              className="link-container relative block group"
              target="_blank"
              title={ t('contact-links.file') }>
                <div className="link-icon bg-stone-500 dark:bg-stone-300 group-hover:bg-zinc-500"></div>
                <div className="icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>

              <svg viewBox="0 0 100 100" class="circle-text">
                <defs>
                  <path id="circlePathText" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                </defs>
                <text>
                  <textPath href="#circlePathText" startOffset="50%" text-anchor="middle">Mi CV</textPath>
                </text>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroTitle