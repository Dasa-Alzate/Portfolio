import React from 'react'
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="bg-neutral-100 dark:bg-neutral-900 transition duration-200 opacity-0 -translate-x-60">
      <h2 className="mx-auto pt-14 w-fit text-3xl text-center section-title typo-quicksand">{t('projects.title')}</h2>
      
      {/* <!-- en la transpilaciona react, aplicar la configuracion de shortcuts for common data attribute selectors en para el data-active tailwind.config.js --> */}
      <ul id="project-category-list" className="flex flex-wrap gap-x-4 gap-y-2 justify-center mx-auto px-4 md:px-32 lg:px-48 mt-10 w-full h-full group">
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">AWS</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">Laravel</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">Node</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">React</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">Angular</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">Tailwind</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">CSS</li>
        {/* onclick="switchActive(this)" */}
        
        <li className="px-4 py-1 transition duration-300 group-hover:opacity-100 hover:!opacity-75 data-[active=true]:!bg-sky-800/50 dark:data-[active=true]:!bg-sky-800/75 group-hover:bg-slate-800/50 dark:group-hover:bg-slate-300/50 group-hover:drop-shadow-lg rounded-full cursor-pointer dark:text-white" data-active="false">Python</li>
        {/* onclick="switchActive(this)" */}

      </ul>

      <div className="mx-auto mt-10 px-4 sm:px-6 md:px-12 lg:px-32 pb-10">
        <ul id="cards-container" role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          <li id="project-1" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
            {/* onclick="toggleModal('modal_ruby')" */}
            <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
              <img className="object-cover place-self-center rounded-lg max-h-full" src="/assets/projects/ruby erp/logo-ruby.png" alt="" loading="lazy" />
            </div>
            <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100" data-i18n="projects.projects-list.project-1.title">
              Ruby ERP
            </h1>
            <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
              <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Laravel</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Angular</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">AWS</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Tailwind</li>
              </ul>
            </div>
            <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500" data-i18n="projects.projects-list.project-1.resume">Software empresarial para una compañia productora de carne de cerdo, con funcionalidades como gestion de inventario (IMS), pedidos automáticos de insumos escasos, seguimiento y gestion de lotes de ganado, recepcion y seguimiento de facturación electrónica, pago de nominas, etc.</p>
          </li>
          <li id="project-4" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
            {/* onclick="toggleModal('modal_scope_presupuesto')" */}
            <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
              <img className="object-cover place-self-center rounded-lg max-h-full" src="/assets/projects/scope/index.png" alt="" loading="lazy" />
            </div>
            <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100" data-i18n="projects.projects-list.project-4.title">
              Scope - Modulo Presupuesto
            </h1>
            <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
              <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Laravel</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Angular</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">AWS</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Tailwind</li>
              </ul>
            </div>
            <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500" data-i18n="projects.projects-list.project-4.resume">Software B2B para la gestion de proyectos de construcción. El Modulo de Presupuesto comprende la creación y administración de Presupuestos con sus componentes, además de la gestión de inventarios, entre otras funciones</p>
          </li>
          <li id="project-5" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
            {/* onclick="toggleModal('modal_scope_facturas')" */}
            <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
              <img className="object-cover place-self-center rounded-lg max-h-full" src="/assets/projects/scope/facturas4.png" alt="" loading="lazy" />
            </div>
            <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100" data-i18n="projects.projects-list.project-5.title">
              Scope - Modulo Facturación
            </h1>
            <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
              <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Laravel</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Angular</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">AWS</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Tailwind</li>
              </ul>
            </div>
            <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500" data-i18n="projects.projects-list.project-5.resume">El modulo de facturación perteneciente al software B2B Scope se encarga de gestionar todo el ciclo de vida de la <b>facturación electrónica</b> de los proyectos de construcción, desde la captura y digestión automática de facturas electrónicas hasta el pago de las mismas.</p>
          </li>
          <li id="project-6" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
            {/* onclick="toggleModal('modal_scope_scanner')" */}
            <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
              <img className="object-cover place-self-center rounded-lg max-h-full" src="/assets/projects/scope/scanner.png" alt="" loading="lazy" />
            </div>
            <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100" data-i18n="projects.projects-list.project-6.title">
              Scope - Modulo de Ingreso de Personal
            </h1>
            <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
              <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Laravel</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Angular</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">AWS</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Tailwind</li>
              </ul>
            </div>
            <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500" data-i18n="projects.projects-list.project-6.resume">El modulo de Ingreso de personal en obra del software B2B Scope integra una aplicación con un scanner de códigos qr para gestionar el ingreso y salida de personal en obra, asi como brindar información en tiempo real del número de personas, y guardar un registro de fecha y hora de ingreso y salida de los contratistas y trabajadores</p>
          </li>
          <li id="project-2" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
            {/* onclick="toggleModal('modal_codepen')" */}
            <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
              <img className="object-cover place-self-center rounded-lg max-h-full" src="/assets/projects/codepen/codepen1.png" alt="" loading="lazy" />
            </div>
            <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100" data-i18n="projects.projects-list.project-2.title">
              Portafolio de Codepen
            </h1>
            <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
              <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Tailwind</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">CSS</li>
              </ul>
            </div>
            <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500" data-i18n="projects.projects-list.project-2.resume">Un portafolio en linea donde publico diferentes diseños web.</p>
          </li>
          <li id="project-3" className="col-span-1 flex flex-col bg-neutral-100 dark:bg-stone-950 p-2 hover:shadow-lg border border-slate-300 dark:border-slate-600 rounded-md text-center cursor-pointer transition duration-300 hover:scale-105">
            {/* onclick="toggleModal('modal_react_chess_clock')" */}
            <div className="aspect-video flex overflow-hidden px-3 pt-2 relative justify-center">
              <img className="object-cover place-self-center rounded-lg max-h-full" src="/assets/projects/react chess clock/chessClock.png" alt="" loading="lazy" />
            </div>
            <h1 className="pt-1 font-semibold text-lg text-slate-900 dark:text-slate-100" data-i18n="projects.projects-list.project-3.title">
              Reloj de Ajedrez
            </h1>
            <div className="mx-6 mt-2 mb-4 pb-4 border-b border-slate-300 dark:border-slate-600 text-wrap wx-auto">
              <ul className="flex flex-wrap pl-1 gap-1 border-stone-800/75 dark:border-sky-500 border-l-4 dark:border-slate-400">
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">React</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Vite</li>
                <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500 cursor-default">Tailwind</li>
              </ul>
            </div>
            <p className="mx-auto px-4 pb-2 text-left text-slate-700 text-sm dark:text-slate-500" data-i18n="projects.projects-list.project-3.resume">Un proyecto hecho en React, que funciona como un reloj de competencias de ajedrez, con funcionalidades personalizables.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects