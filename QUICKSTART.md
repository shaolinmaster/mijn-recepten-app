# 🎯 Quick Start Guide

## ⚡ Snel Starten (Development)

```bash
cd /home/ken/Projects/mijn-recepten-app
npm run dev
```

Dan open je browser naar: **http://localhost:3001/**

## 📱 Op je Telefoon Gebruiken

### Android:
1. Open `http://192.168.1.239:3001/` in je telefoon browser (zie de terminal output voor jouw IP)
2. Menu (⋮) → "App installeren"
3. Klaar!

### iPhone:
1. Open `http://192.168.1.239:3001/` in Safari
2. Share (⬆️) → "Add to Home Screen"
3. Klaar!

## 📁 Belangrijke Bestanden

- `src/App.tsx` - Main app component (voeg je pagina's hier toe)
- `src/main.tsx` - Entry point (service worker registratie)
- `vite.config.ts` - Build configuratie
- `public/manifest.json` - PWA configuratie
- `public/sw.js` - Service Worker (offline support)

## 🛠️ Nuttige Commando's

```bash
# Development
npm run dev              # Start dev server op poort 3001

# Production
npm run build            # Build voor productie (in dist/)
npm run preview          # Preview de production build

# Quality
npm run lint             # TypeScript type checking

# Utilities
./deploy.sh             # Build en check ready for deployment
```

## 🚀 Gereed voor Productie?

1. Zorg voor HTTPS (vereist voor PWA)
2. Run: `npm run build`
3. Upload `dist/` folder naar je server
4. Check: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📖 Meer Info

- [README.md](./README.md) - Volledige projectbeschrijving
- [INSTALLATIE.md](./INSTALLATIE.md) - Installatie op telefoon
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment

## ✅ Wat is al ingesteld?

- ✅ React + TypeScript
- ✅ Vite build tool
- ✅ React Router DOM
- ✅ Service Worker (offline support)
- ✅ PWA Manifest
- ✅ App Icons (48x48 tot 512x512)
- ✅ Tailwind CSS (optioneel)
- ✅ Firebase integration (optioneel)
- ✅ Google Generative AI (optioneel)

## 🎓 Volgende Stappen

1. **Voeg je eerste pagina toe** in `src/App.tsx`
2. **Test op je telefoon** voor native app feel
3. **Voeg styling toe** met Tailwind CSS
4. **Verbind met Firebase** voor data storage (optioneel)
5. **Deploy naar productie** (Vercel, Netlify, of je eigen server)

---

**Veel plezier met bouwen!** 🚀

