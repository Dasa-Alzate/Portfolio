import React from 'react'
import { useTranslation } from 'react-i18next';

function ProjectCard( {project, index} ) {
  const { t } = useTranslation();

  return (
    <li id="project-1" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
      {/* onclick="toggleModal('modal_ruby')" */}
      <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
        <img className="object-cover place-self-center rounded-lg max-h-full" src={project.thumbnail} alt="" loading="lazy" />
      </div>
      <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100">{t(`projects.projects-list.project-${index}.title`)}</h1>
      <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
        <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
          {project.stack.map((icon, i) => (
            <li key={i} className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">{icon}</li>
          ))}
        </ul>
      </div>
      <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500">{t(`projects.projects-list.project-${index}.resume`)}</p>
    </li>
  )
}

export default ProjectCard