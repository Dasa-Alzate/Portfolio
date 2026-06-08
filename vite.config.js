import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: el sitio se sirve desde un subpath de GitHub Pages
  // (/Portfolio/), no desde la raíz del dominio. Sin esto Vite genera
  // rutas absolutas (/assets/...) que dan 404 en producción.
  base: './',
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
})
