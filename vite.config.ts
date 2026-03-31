import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(), // Tailwind MOET als eerste staan
    react(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   injectRegister: 'auto',
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    //     cleanupOutdatedCaches: true,
    //     clientsClaim: true,
    //     skipWaiting: true
    //   },
    //   devOptions: {
    //     enabled: true
    //   }
    // })
  ],
  build: {
    chunkSizeWarningLimit: 1600, // AI Studio apps zijn soms groot, dit voorkomt waarschuwingen
  }
})