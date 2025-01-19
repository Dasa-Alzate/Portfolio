/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'opacity-50', 
    'opacity-25', 
    'mix-blend-overlay'
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms') ],
}

