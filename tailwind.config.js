/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'opacity-50', 
    'opacity-25', 
    'mix-blend-overlay',
    'text-teal-700',
    'text-teal-800',
    'hover:text-teal-500',
    'text-slate-800',
    'dark:text-slate-300',
    'bg-neutral-300', 
    'dark:bg-neutral-900', 
    'text-slate-800', 
    'dark:text-slate-100', 
    'selection:bg-slate-400/50', 
    'selection:text-sky-800/75', 
    'dark:selection:bg-sky-400/50', 
    'dark:selection:text-sky-100/75'
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms') ],
}

