import React from 'react'
import { useTranslation } from 'react-i18next';
import Stack from './Stack';

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="work-education" className="bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
      <h2 className="mx-auto pt-14 w-fit text-3xl text-center section-title typo-quicksand">
        {t('work-education.title')}
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
                  <div>{t('work-education.work.title')}</div>
                </div>
              </div>

              <div className="flex-auto ml-4" >
                <div>{t('work-education.work.role-1')}</div>
                <div className="mt-1 pl-3 text-slate-500" >
                  <div className="pl-1 border-stone-800/75 border-l-4 dark:border-slate-400">
                    <ul className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 pb-2 pl-1">
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Laravel</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">AWS</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Angular</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">SQL</li>
                    </ul>
                  </div>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.work.company')}</p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.work.time-1')}</p>
                </div>
              </div>

              <div className="flex-auto mt-4 ml-4" >
                <div>{t('work-education.work.role-2')}</div>
                <div className="mt-1 pl-3 text-slate-500" >
                  <div className="pl-1 border-stone-800/75 border-l-4 dark:border-slate-400">
                    <ul className="flex flex-wrap lg:flex-nowrap gap-2 mt-2 pb-2 pl-1">
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Laravel</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">AWS</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">Tailwind</li>
                      <li className="bg-stone-800/20 dark:bg-sky-800/20 mx-1 px-3 p-1 rounded-full h-min text-sm text-stone-500 dark:text-sky-500">JavaScript</li>
                    </ul>
                  </div>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.work.company')}</p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.work.time-2')}</p>
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
                  <div>{t('work-education.education.title')}</div>
                </div>
              </div>
              <div className="flex-auto ml-4 mt-5">
                <div>{t('work-education.education.title-1')}</div>
                <div className="mt-1 pl-3 text-slate-500">
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.education.college-1')}</p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.education.time-1')}</p>
                </div>
              </div>

              <div className="flex-auto ml-4 mt-4">
                <div>{t('work-education.education.title-2')}</div>
                <div className="mt-1 pl-3 text-slate-500">
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.education.college-2')}</p>
                  <p className="pl-3 border-stone-800/75 border-l-4 dark:border-slate-400">{t('work-education.education.time-2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Stack />
    </section>
  )
}

export default Experience