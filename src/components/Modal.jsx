import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carrousel from './Carrousel';

function Modal( { modal, setModal } ) {
  const { t } = useTranslation();
  const projectsList = Object.values(t('projects.projects-list', { returnObjects: true }));

  return (
    <>
      {projectsList.map((project, i) => (
        <div key={i} className={"bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto modal " + ((i+1) == modal ? "" : "hidden")} id={'modal-'+(i+1)}>
          <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
            <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
            <div
              className="inline-block relative bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
                <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
                  <Carrousel images={project.images}/>
                </div>
                <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify"  dangerouslySetInnerHTML={{ __html: t(`projects.projects-list.project-${(i+1)}.modal-content`) }}></div>
              </div>
              <button type="button" className="absolute hidden sm:inline sm:top-1 right-1 bg-transparent text-stone-900 hover:text-stone-800/75 dark:text-stone-300 hover:dark:text-stone-400/75 px-4 py-4 text-2xl" onClick={() => {setModal(0)}} >
                <i className="bi bi-x-lg"></i>
              </button>
              <button type="button" className="absolute bottom-1 sm:hidden right-2 dark:text-zinc-900 bg-stone-900 hover:bg-stone-800/75 dark:bg-stone-300 hover:dark:bg-stone-400/75 rounded-lg px-4 py-0 text-lg" onClick={() => {setModal(0)}} >Cerrar</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Modal