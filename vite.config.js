import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en https://joydisenos.github.io/ (repositorio de usuario),
// por eso la base es la raíz.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    cssMinify: true,
  },
})
