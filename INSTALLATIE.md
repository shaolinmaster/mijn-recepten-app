# Gerechten App - Installatie Gids

Dit is een **Progressive Web App (PWA)** die je zowel in je browser als als een native app op je telefoon kan gebruiken.

## 🌐 Via Browser

Ga naar: `http://localhost:3001/` (of de URL die in de terminal wordt getoond)

## 📱 Als App op je Telefoon

### Android (Chrome, Edge, Brave, etc.)

1. Open de app in je browser op je telefoon
2. Tik op het menu (⋮) in de rechterbovenhoek
3. Selecteer **"App installeren"** of **"Add to home screen"**
4. Bevestig de installatie
5. De app verschijnt nu op je homescreen!

### iPhone (Safari)

1. Open de app in Safari op je iPhone
2. Tik op het Share-knop (⬆️ pijl)
3. Scroll naar beneden en tik op **"Zum Home-Bildschirm"** (of "Add to Home Screen")
4. Geef de app een naam en tik **"Hinzufügen"** (of "Add")
5. De app is nu op je homescreen beschikbaar!

## ⚙️ Lokale Ontwikkeling

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Build voor productie
npm build

# Preview de build
npm preview
```

## 🔄 Updates

Als je de app hebt geïnstalleerd en er zijn updates beschikbaar, zal de app automatisch updates downloaden en deze bij het volgende bezoek laden.

## 💾 Offline Functionaliteit

Omdat dit een PWA is, werkt de app ook offline (voor cached content). Dit gebeurt automatisch dankzij de Service Worker.

## 🐛 Problemen?

- **App werkt offline niet:** Zorg ervoor dat je minstens 1 keer online bent geweest zodat de bestanden kunnen worden gecached
- **Updates verschijnen niet:** Wis de browser cache of herinstalleer de app
- **App is te langzaam:** Dit kan happen als je veel gerechten hebt. Overweeg om een database te gebruiken (Firebase is al geïnstalleerd!)

