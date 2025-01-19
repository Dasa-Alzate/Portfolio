import React from 'react'

function Modal() {
  return (
    <>
    <div className="bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto hidden modal" id="modal_ruby">
      <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
        <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
        <div
          className="inline-block bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
              <div className="carousel h-full overflow-hidden self-auto swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/ruby erp/ruby1.png" alt="" onclick="openLightbox('/assets/projects/ruby erp/ruby1.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/ruby erp/ruby3.png" alt="" onclick="openLightbox('/assets/projects/ruby erp/ruby3.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/ruby erp/ruby4.png" alt="" onclick="openLightbox('/assets/projects/ruby erp/ruby4.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/ruby erp/ruby5.png" alt="" onclick="openLightbox('/assets/projects/ruby erp/ruby5.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/ruby erp/ruby6.png" alt="" onclick="openLightbox('/assets/projects/ruby erp/ruby6.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/ruby erp/ruby7.png" alt="" onclick="openLightbox('/assets/projects/ruby erp/ruby7.png')" loading="lazy" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify" data-i18n="projects.projects-list.project-1.modal-content">
              <p className="font-bold text-center text-gray-500 text-xl">
                Ruby ERP
              </p>
              <hr/>
              <br/>
              <p>
                Software empresarial para una empresa productora de carne de cerdo. El programa incluye las siguientes funcionalidades:
              </p>
              <ul className="list-disc">
                <li>Seguimiento de los lotes de ganado en las distintas etapas de crecimiento (peso, consumo de alimento, mortalidad, costo, ganancia, etc).</li>
                <li>Control de entradas y salidas de inventario (alimentos, medicinas, insumos).</li>
                <li>Recepción de facturas electronicas de clientes y proveedores.</li>
                <li>Cálculo estimado del alimento necesario para la semana siguiente, y pedido automatico al proveedor.</li>
                <li>Cálculo de nomina y notificacion automatica a los trabajadores.</li>
              </ul>
              <p className="text-slate-800 dark:text-slate-300 font-bold mt-2 text-lg">
                Parámetros técnicos:
              </p>
              <ul className="list-disc">
                <li>Integración del <strong>Google Workspace</strong> para recibir y procesar información de correos electrónicos</li>
                <li>Integración de <strong>API</strong> para envio de SMS</li>
                <li><strong>Service worker</strong> para acceso a la aplicación sin internet</li>
              </ul>
              <br/>
            </div>
          </div>
          <div className="text-right bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3">
            <button
              type="button"
              className="bg-gray-500/50 dark:hover:bg-gray-300/50 hover:bg-gray-700/50 backdrop-blur-sm mr-2 px-4 py-2 text-white dark:text-gray-900 rounded"
              onclick="toggleModal('modal_ruby')"
            >
              <i className="fa-times fas"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto hidden modal" id="modal_scope_presupuesto">
      <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
        <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
        <div
          className="inline-block bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
              <div className="carousel h-full overflow-hidden self-auto swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/index.png" alt="" onclick="openLightbox('/assets/projects/scope/index.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/presupuesto menu.png" alt="" onclick="openLightbox('/assets/projects/scope/presupuesto menu.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/inventario menu.png" alt="" onclick="openLightbox('/assets/projects/scope/inventario menu.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/contratos.png" alt="" onclick="openLightbox('/assets/projects/scope/contratos.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/acta editar.png" alt="" onclick="openLightbox('/assets/projects/scope/acta editar.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/acta ver.png" alt="" onclick="openLightbox('/assets/projects/scope/acta ver.png')" loading="lazy" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify" data-i18n="projects.projects-list.project-4.modal-content">
              <p className="font-bold text-center text-gray-500 text-xl">
                Scope - Modulo Presupuestos
              </p>
              <hr/>
              <br/>
              <p>
                Modulo principal de un software B2B para la gestión de presupuestos de proyectos de construcción. Entre sus funcionalidades incluye:
              </p>
              <ul className="list-disc">
                <li>Creación de Presupuestos, Capitulos, APUs, Secciones, Elementos e Insumos, relacionando los elementos entre si y calculando valores unitarios y totales.</li>
                <li>Agenda del día generada automáticamente, incluyendo los contratistas y sus actividades planificadas.</li>
                <li>Gestión de Contratos y de la documentación requerida, incluyendo las pólizas y garantias, contratos, renovaciones y el Cálculo de retenciones e impuestos.</li>
                <li>Gestión de Inventarios, incluyendo órdenes de compra de insumos, entradas y salidas.</li>
                <li>Creación de actas de obra, asociando actividades de mano de obra a contratistas y llevando control del progreso del proyecto en tiempo real.</li>
                <li>Portal especial de contratistas para que registren sus trabajadores y reciban su código único para ingresar a la obra.</li>
              </ul>
              <br/>
            </div>
          </div>
          <div className="text-right bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3">
            <button
              type="button"
              className="bg-gray-500/50 dark:hover:bg-gray-300/50 hover:bg-gray-700/50 backdrop-blur-sm mr-2 px-4 py-2 text-white dark:text-gray-900 rounded"
              onclick="toggleModal('modal_scope_presupuesto')"
            >
              <i className="fa-times fas"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto hidden modal" id="modal_scope_facturas">
      <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
        <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
        <div
          className="inline-block bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
              <div className="carousel h-full overflow-hidden self-auto swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/facturas1.png" alt="" onclick="openLightbox('/assets/projects/scope/facturas1.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/facturas2.png" alt="" onclick="openLightbox('/assets/projects/scope/facturas2.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/facturas3.png" alt="" onclick="openLightbox('/assets/projects/scope/facturas3.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/facturas4.png" alt="" onclick="openLightbox('/assets/projects/scope/facturas4.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/factura xml.png" alt="" onclick="openLightbox('/assets/projects/scope/factura xml.png')" loading="lazy" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify" data-i18n="projects.projects-list.project-5.modal-content">
              <p className="font-bold text-center text-gray-500 text-xl">
                Scope - Modulo Facturación
              </p>
              <hr/>
              <br/>
              <p>
                Modulo para la gestión del ciclo de vida de facturas electrónicas, con funcionalidades como:
              </p>
              <ul className="list-disc">
                <li>Captación y digestión automática de las facturas electrónicas enviadas al correo electrónico</li>
                <li>Asociación de las facturas con las órdenes de compra y las remisiones.</li>
                <li>Alarmas antes de que las facturas caduquen.</li>
                <li>Autorización de facturas desde el almacen para confirmar entrega en punto, hasta tesorería para autorizar pago.</li>
                <li>Cálculo de impuestos y retenciones de las facturas, y generación de informes.</li>
              </ul>
              <p className="text-slate-800 dark:text-slate-300 font-bold mt-2 text-lg">
                Parámetros técnicos:
              </p>
              <ul className="list-disc">
                <li>Integración del <strong>Google Workspace</strong> para recibir y procesar información de correos electrónicos</li>
                <li>Librería propia escrita en AppScript (de Google) con los parámetros de los proveedores para interpretar el xml de las facturas electrónicas</li>
              </ul>
              <br/>
            </div>
          </div>
          <div className="text-right bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3">
            <button
              type="button"
              className="bg-gray-500/50 dark:hover:bg-gray-300/50 hover:bg-gray-700/50 backdrop-blur-sm mr-2 px-4 py-2 text-white dark:text-gray-900 rounded"
              onclick="toggleModal('modal_scope_facturas')"
            >
              <i className="fa-times fas"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto hidden modal" id="modal_scope_scanner">
      <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
        <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
        <div
          className="inline-block bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
              <div className="carousel h-full overflow-hidden self-auto swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/scanner.png" alt="" onclick="openLightbox('/assets/projects/scope/scanner.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/scope/mano de obra.png" alt="" onclick="openLightbox('/assets/projects/scope/mano de obra.png')" loading="lazy" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify" data-i18n="projects.projects-list.project-6.modal-content">
              <p className="font-bold text-center text-gray-500 text-xl">
                Scope - Modulo Ingreso de personal en obra
              </p>
              <hr/>
              <br/>
              <p>
                Modulo para el ingreso de personal en obra del software B2B Scope, incluyedo funciones como:
              </p>
              <ul className="list-disc">
                <li>Registro de entrada y salida del personal.</li>
                <li>Información en tiempo real de trabajadores en obra, de baja, etc.</li>
                <li>Filtros por contratista y por ocupación del personal.</li>
              </ul>
              <p className="text-slate-800 dark:text-slate-300 font-bold mt-2 text-lg">
                Parámetros técnicos:
              </p>
              <ul className="list-disc">
                <li>Lector de QRs para el acceso de personal a la obra de construcción</li>
                <li><strong>Service worker</strong> para acceso al scanner sin acceso a internet, desde dispositivos móviles</li>
              </ul>
              <br/>
            </div>
          </div>
          <div className="text-right bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3">
            <button
              type="button"
              className="bg-gray-500/50 dark:hover:bg-gray-300/50 hover:bg-gray-700/50 backdrop-blur-sm mr-2 px-4 py-2 text-white dark:text-gray-900 rounded"
              onclick="toggleModal('modal_scope_scanner')"
            >
              <i className="fa-times fas"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto hidden modal" id="modal_codepen">
      <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
        <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
        <div
          className="inline-block bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
              <div className="carousel relative h-full overflow-hidden self-auto swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/codepen/codepen1.png" alt="" onclick="openLightbox('/assets/projects/codepen/codepen1.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/codepen/codepen2.png" alt="" onclick="openLightbox('/assets/projects/codepen/codepen2.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/codepen/codepen3.png" alt="" onclick="openLightbox('/assets/projects/codepen/codepen3.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer" src="/assets/projects/codepen/codepen4.png" alt="" onclick="openLightbox('/assets/projects/codepen/codepen4.png')" loading="lazy" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify" data-i18n="projects.projects-list.project-2.modal-content">
              <p className="font-bold text-center text-gray-500 text-xl">
                Portafolio de codepen
              </p>
              <hr/>
              <br/>
              <p>
                Un portafolio en linea donde publico diferentes diseños web. Puedes verlo dando <a className="text-sky-700 hover:text-sky-500 font-bold cursor-pointer" href="https://dasa-alzate.github.io/codigos-codepen/" target="_blank">click aquí.</a> También puedes visitar el <a className="text-sky-700 hover:text-sky-500 font-bold cursor-pointer" href="https://codepen.io/wvoiqkus-the-scripter" target="_blank">perfil de codepen.</a>
              </p>
              <p className="text-slate-800 dark:text-slate-300 font-bold mt-2 text-lg">
                Tecnologías:
              </p>
              <ul className="list-disc">
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>CSS Puro</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>etc...</li>
              </ul>
              <br/>
            </div>
          </div>
          <div className="text-right bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3">
            <button
              type="button"
              className="bg-gray-500/50 dark:hover:bg-gray-300/50 hover:bg-gray-700/50 backdrop-blur-sm mr-2 px-4 py-2 text-white dark:text-gray-900 rounded"
              onclick="toggleModal('modal_codepen')"
            >
              <i className="fa-times fas"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-slate-950/50 top-0 left-0 z-10 fixed w-full h-full lg:h-auto overflow-y-auto hidden modal" id="modal_react_chess_clock">
      <div className="flex items-center justify-center px-4 sm:p-0 pt-4 pb-20 text-center" >
        <span className="sm:inline-block sm:h-screen hidden sm:align-middle">​</span>
        <div
          className="inline-block bg-white/75 dark:bg-gray-900/75 shadow-xl backdrop-blur-sm sm:my-8 rounded-lg sm:w-full max-w-6xl text-left transform transition-all overflow-hidden align-justify sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="lg:flex px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div className="relative self-center lg:w-1/2 h-80 self-auto slide">
              <div className="carousel relative h-full overflow-hidden self-auto swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer place-self-center h-full object-cover object-center" src="/assets/projects/react chess clock/chessClock0.png" alt="" onclick="openLightbox('/assets/projects/react chess clock/chessClock0.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer place-self-center h-full object-cover object-center" src="/assets/projects/react chess clock/chessClock1.png" alt="" onclick="openLightbox('/assets/projects/react chess clock/chessClock1.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer place-self-center h-full object-cover object-center" src="/assets/projects/react chess clock/chessClock2.png" alt="" onclick="openLightbox('/assets/projects/react chess clock/chessClock2.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer place-self-center h-full object-cover object-center" src="/assets/projects/react chess clock/chessClock3.png" alt="" onclick="openLightbox('/assets/projects/react chess clock/chessClock3.png')" loading="lazy" />
                  </div>
                  <div className="swiper-slide flex">
                    <img className="cursor-pointer place-self-center h-full object-cover object-center" src="/assets/projects/react chess clock/chessClock4.png" alt="" onclick="openLightbox('/assets/projects/react chess clock/chessClock4.png')" loading="lazy" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="dark:text-gray-200 lg:w-1/2 overflow-y-auto lg:pl-16 px-4 lg:px-0 text-ellipsis text-gray-800 text-justify" data-i18n="projects.projects-list.project-3.modal-content">
              <p className="font-bold text-center text-gray-500 text-xl">
                React chessClock
              </p>
              <hr/>
              <br/>
              <p>
                Este es un proyecto construido en React usando Vite y estilizado con Tailwind, que funciona como un reloj de ajedrez profesional. Su diseño es responsivo y se adapta a todos los dispositivos. 
                <br/>Es altamente personalizable. Se puede adaptar el tiempo total, el tiempo de reposición y el tiempo desde el cual la reposición es aplicada. También se puede personalizar el número de jugadores en caso que se quiera usar en un juego diferente al ajedrez y cuente con más jugadores. 
                <br/>Puedes verlo dando <a className="text-sky-700 hover:text-sky-500 font-bold cursor-pointer" href="https://dasa-alzate.github.io/react-chessclock/" target="_blank">click aquí.</a> O puedes <a className="text-sky-700 hover:text-sky-500 font-bold cursor-pointer" href="https://github.com/Dasa-Alzate/react-chessclock" target="_blank">visitar el repositorio.</a>
              </p>
              <p className="text-slate-800 dark:text-slate-300 font-bold mt-2 text-lg">
                Tecnologías:
              </p>
              <ul className="list-disc">
                <li>React</li>
                <li>Vite</li>
                <li>Tailwind</li>
              </ul>
              <br/>
            </div>
          </div>
          <div className="text-right bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3">
            <button
              type="button"
              className="bg-gray-500/50 dark:hover:bg-gray-300/50 hover:bg-gray-700/50 backdrop-blur-sm mr-2 px-4 py-2 text-white dark:text-gray-900 rounded"
              onclick="toggleModal('modal_react_chess_clock')"
            >
              <i className="fa-times fas"></i> Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal