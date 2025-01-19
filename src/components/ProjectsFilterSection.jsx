import React from 'react'
import ProjectsFilterBtn from './ProjectsFilterBtn';

function ProjectsFilterSection( {filters, filterToggle} ) {

  return (
    <ul id="project-category-list" className="flex flex-wrap gap-x-4 gap-y-2 justify-center mx-auto px-4 md:px-32 lg:px-48 mt-10 w-full h-full group">
      { Object.keys(filters).map((filter, i) => (<ProjectsFilterBtn key={i} title={filter} active={filters[filter]} onClick={() => filterToggle(filter)} />)) }
    </ul>
  )
}

export default ProjectsFilterSection