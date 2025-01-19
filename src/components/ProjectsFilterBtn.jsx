import React from 'react'

function ProjectsFilterBtn( {title, active, onClick} ) {
  return (
    <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active={active} onClick={onClick}>{title}</li>
  )
}

export default ProjectsFilterBtn