# 🍳 Gerechten App - Progressive Web App

Een geavanceerde applicatie voor het beheren en ontdekken van gerechten. Deze app werkt als een Progressive Web App (PWA) en kan zowel in de browser als als een native app op je telefoon gebruikt worden.

## ✨ Functies

- 🌐 Werkt in je browser
- 📱 Installeerbaar als app op je telefoon (Android & iPhone)
- 💾 Werkt offline (voor cached content)
- 🔄 Automatische updates
- ⚡ Snel en responsief

## 🚀 Snel Starten

### Vereisten
- Node.js (v14 of hoger)
- npm of yarn

### Installatie

```bash
# Clone of download het project
cd mijn-recepten-app

# Installeer dependencies
npm install

# Start development server
npm run dev
```

De app is nu beschikbaar op: **http://localhost:3001/**

## 📱 Installatie op Telefoon

### Android (Chrome, Edge, Brave, etc.)

1. Open de app in je browser op je telefoon: `http://localhost:3001/`
2. Tik op het menu (⋮) in de rechterbovenhoek
3. Selecteer **"App installeren"** of **"Add to home screen"**
4. Bevestig de installatie
5. De app verschijnt nu op je homescreen! 🎉

### iPhone (Safari)

1. Open de app in Safari op je iPhone: `http://localhost:3001/`
2. Tik op het Share-knop (⬆️ pijl)
3. Scroll naar beneden en tik op **"Add to Home Screen"**
4. Geef de app een naam en tik **"Add"**
5. De app is nu op je homescreen beschikbaar! 🎉

## 🏗️ Bouwen voor Productie

```bash
# Build voor productie
npm run build

# Preview de productie build
npm run preview
```

De gebouwde bestanden bevinden zich in de `dist/` folder.

## 📁 Project Structuur

```
mijn-recepten-app/
├── src/
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Main app component
│   └── index.css         # Global styles
├── public/
│   ├── sw.js             # Service Worker
│   ├── manifest.json     # PWA manifest
│   └── icons/            # App icons (48x48 tot 512x512)
├── dist/                 # Production build output
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies
```

## 🔧 Beschikbare Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie
- `npm run preview` - Preview production build
- `npm run lint` - Run TypeScript linter

## 🔌 Afhankelijkheden

### Core
- **React 19** - UI framework
- **Vite** - Build tool
- **React Router DOM** - Routing
- **TypeScript** - Type safety

### PWA Support
- **vite-plugin-pwa** - PWA plugin voor Vite

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

### Andere
- **Firebase** - Backend services (optional)
- **Google Generative AI** - AI features (optional)
- **date-fns** - Date utilities
- **html5-qrcode** - QR code scanning

## 💾 Offline Support

De app gebruikt een Service Worker voor offline functionaliteit:

- Cached essentiële bestanden worden offline geladen
- API calls vallen terug op cache wanneer offline
- Automatische cache management

## 🐛 Troubleshooting

### App werkt offline niet
- Zorg ervoor dat je minstens 1 keer online bent geweest
- Controleer of de Service Worker is geregistreerd in DevTools

### Updates verschijnen niet
- Wis de browser cache
- Herinstalleer de app op je telefoon
- In dev-modus: Houd F5 ingedrukt om hard refresh te doen

### App crasht
- Controleer de browser console voor errors (F12)
- Probeer een hard refresh (Ctrl+Shift+R of Cmd+Shift+R)

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Web.dev PWA Checklist](https://web.dev/pwa-checklist/)

## 📄 Licentie

Dit project is open source en beschikbaar onder de MIT licentie.

---

Voor meer details zie ook [INSTALLATIE.md](./INSTALLATIE.md)

