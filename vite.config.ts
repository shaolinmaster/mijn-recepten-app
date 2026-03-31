import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(), // Tailwind MOET als eerste staan
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'] // Dit voorkomt dat hij oneindig zoekt
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 1600, // AI Studio apps zijn soms groot, dit voorkomt waarschuwingen
  }
})