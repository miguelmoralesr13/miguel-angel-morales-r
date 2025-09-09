import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/miguel-angel-morales-r/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-i18next"],
          swiper: ["swiper"],
          jspdf: ["jspdf"],
        },
      },
    },
    chunkSizeWarningLimit: 800, // Opcional: sube el límite de advertencia
  },
})
