import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite' // Voeg deze toe!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Zorgt dat je styling werkt
    VitePWA({
      registerType: 'autoUpdate', // Veel makkelijker voor nu dan injectManifest
      manifest: {
        name: 'Gerechten App',
        short_name: 'Gerechten',
        description: 'Een geavanceerde applicatie voor het beheren en ontdekken van gerechten',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})