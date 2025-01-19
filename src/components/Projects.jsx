import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectsFilterSection from './ProjectsFilterSection';
import ProjectCard from './ProjectCard';

function Projects() {
  const { t } = useTranslation();
  const projectsList = Object.values(t('projects.projects-list', { returnObjects: true }));
  const [filters, setFilters] = useState({
    AWS: false, 
    Laravel: false, 
    Node: false, 
    React: false, 
    Angular: false, 
    Tailwind: false, 
    CSS: false, 
    Python: false
  });

  const filterToggle = (filterName) => {
    console.log(activeFilters)
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  const activeFilters = Object.keys(filters).filter((key) => filters[key]);

  const filteredProjects = activeFilters.length === 0
    ? projectsList
    : projectsList.filter((project) =>
        project.stack.some((tech) => activeFilters.includes(tech))
      );

  return (
    <section id="projects" className="bg-neutral-100 dark:bg-neutral-900 transition duration-200">
      <h2 className="mx-auto pt-14 w-fit text-3xl text-center section-title typo-quicksand">
        {t('projects.title')}
      </h2>
      
      <ProjectsFilterSection filters={filters} filterToggle={filterToggle} />

      <div className="mx-auto mt-10 px-4 sm:px-6 md:px-12 lg:px-32 pb-10">
        <ul
          id="cards-container"
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} index={i + 1} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
