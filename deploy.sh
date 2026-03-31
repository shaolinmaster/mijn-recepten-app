#!/bin/bash

# Gerechten App - Deployment Script

echo "🍳 Gerechten App - Deployment Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is niet geïnstalleerd. Installeer Node.js van https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js gevonden: $(node --version)"
echo "✅ npm gevonden: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Dependencies installeren..."
npm install

# Build for production
echo ""
echo "🔨 App bouwen voor productie..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo ""
    echo "✅ Build succesvol!"
    echo ""
    echo "📁 Gebouwde bestanden zijn in de 'dist' folder:"
    du -sh dist/
    echo ""
    echo "🚀 De app is klaar voor deployment!"
    echo ""
    echo "Voor lokale testing:"
    echo "  npm run preview"
    echo ""
    echo "Voor productie deployment:"
    echo "  - Upload de inhoud van 'dist/' naar je webserver"
    echo "  - Zorg ervoor dat je server HTTPS ondersteunt (vereist voor PWA)"
    echo "  - Zorg ervoor dat service worker (sw.js) correct wordt geserved"
else
    echo "❌ Build is mislukt!"
    exit 1
fi

