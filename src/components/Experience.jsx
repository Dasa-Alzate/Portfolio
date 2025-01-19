import React from 'react'

function Experience() {
  return (
    <section id="work-education" className="bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
      <h2 className="mx-auto pt-14 w-fit text-3xl text-center section-title typo-quicksand" data-i18n="work-education.title">
        Educación &amp; Experiencia
      </h2>
      
      <div className="work-education-wrapper mt-5">
        <div className="mx-auto w-full h-full container">
          <div className="flex flex-col lg:flex-row px-4 sm:p-6 pt-5 pb-4 sm:pb-4">
            <div id="work" className="relative w-3/4 lg:w-1/2 self-auto">
              <div className="flex items-center p-4">
                <img
                  src="assets/work.svg"
                  alt=""
                  className="flex-none w-10 h-10"
                />
                <div className="flex-auto ml-4">
                  <div data-i18n="work-education.work.title">Experiencia</div>
                </div>
              </div>

              <div className="flex-auto ml-4" >
                <div data-i18n="work-education.work.role-1">Dev Lead</div>
                <div className="mt-1 pl-3 text-slate-500" >
                  <div className="pl-1 border-stone-800/75 border-l-4 dark:border-slate-400">
                    <ul className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 pb-2 pl-1 border-stone-800/75 border-l-4 dark:border-slate-400">
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Laravel</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">AWS</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Angular</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">SQL</li>
                    </ul>
                  </div>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.work.company">Projects Triple A  </p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.work.time-1">Apr. 2021 - Jul. 2023  ·  2Y 4M  </p>
                </div>
              </div>

              <div className="flex-auto mt-4 ml-4" >
                <div data-i18n="work-education.work.role-2">Desarrollador Full-Stack</div>
                <div className="mt-1 pl-3 text-slate-500" >
                  <div className="pl-1 border-stone-800/75 border-l-4 dark:border-slate-400">
                    <ul className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 pb-2 pl-1 border-stone-800/75 border-l-4 dark:border-slate-400">
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Laravel</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">AWS</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Tailwind</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">JavaScript</li>
                    </ul>
                  </div>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.work.company">Projects Triple A  </p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.work.time-2">Apr. 2021 - Jul. 2023  ·  2Y 4M  </p>
                </div>
              </div>

            </div>
            <div id="education" className="relative mt-10 mb-10 lg:mt-0 lg:mb-0 w-3/4 lg:w-1/2 self-auto">
              <div className="flex items-center p-4">
                <img
                  src="assets/studies.svg"
                  alt=""
                  className="flex-none w-10 h-10"
                />
                <div className="flex-auto ml-4">
                  <div data-i18n="work-education.education.title">Educación</div>
                </div>
              </div>
              <div className="flex-auto ml-4 mt-5">
                <div data-i18n="work-education.education.title-1">Ingenieria Eléctrica (Incompleta)</div>
                <div className="mt-1 pl-3 text-slate-500">
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.education.college-1">Universidad Tecnológica de Pereira</p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.education.time-1">2015 - 2020</p>
                </div>
              </div>

              <div className="flex-auto ml-4 mt-4">
                <div data-i18n="work-education.education.title-2">FP Superior en Desarrollo de Aplicaciones Web</div>
                <div className="mt-1 pl-3 text-slate-500">
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.education.college-2">CESUR</p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400" data-i18n="work-education.education.time-2">2023 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="stack" className="relative z-10 bg-gradient-to-br from-10% from-cyan-700 via-sky-400 to-sky-500 overflow-hidden">
        <div className="bg-transparent py-10 hover:text-white transition duration-800 group">
          <h2 className="mx-auto pt-4 w-fit text-2xl text-center section-title typo-quicksand" data-i18n="stack.title">
            Mi Stack
          </h2>
          <div className="flex flex-wrap justify-center mx-auto px-4 w-full h-full container">
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/aws.svg" alt="aws" title="aws" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/laravel.svg" alt="laravel" title="laravel" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/angular.svg" alt="angular" title="angular" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/react.svg" alt="react" title="react" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/python.svg" alt="python" title="python" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/php.svg" alt="php" title="php" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/java.svg" alt="java" title="java" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/spring.svg" alt="spring" title="spring" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/jquery.svg" alt="jquery" title="jquery" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/bootstrap.svg" alt="bootstrap" title="bootstrap" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/tailwind.svg" alt="tailwind" title="tailwind" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/oracle.svg" alt="oracle" title="oracle" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/mysql.svg" alt="mysql" title="mysql" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/mongodb.svg" alt="mongodb" title="mongoDB" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/tensorflow.svg" alt="tensorflow" title="tensorflow" width="512" height="384"/>
            <img className="duration-800 z-30 flex-initial hover:!opacity-40 opacity-0 hover:!scale-110 lg:w-24 m-6 md:m-4 md:w-1/6 mix-blend-overlay transition w-1/5 xl:w-28" src="assets/stack/docker.svg" alt="docker" title="docker" width="512" height="384"/>
          </div>
          <img id="bg-logo-layer" className="absolute z-20 bottom-2 md:-bottom-32 lg:top-4 -right-2 md:-right-32 invert flex-initial m-6 mix-blend-soft-light transition opacity-0 h-1/2 md:h-auto md:w-1/2" src="" width="512" height="384"/>
        </div>
      </div>
    </section>
  )
}

export default Experience