# 🚀 Deployment Gids - Gerechten App

Deze gids helpt je met het deployen van je Gerechten App naar een live server.

## ⚠️ Wichtig: HTTPS Vereist

Progressive Web Apps **MOETEN** over HTTPS worden bediend in productie. Dit is een veiligheidsvereiste voor Service Workers.

## 🏗️ Lokaal Testen

Voor je naar productie gaat, kun je de productie build lokaal testen:

```bash
# Build de app
npm run build

# Preview de productie build
npm run preview
```

Open dan `http://localhost:4173/` in je browser.

## 📤 Deployment Opties

### Option 1: Vercel (Aanbevolen voor beginners)

Vercel ondersteunt PWAs out-of-the-box en biedt HTTPS automatisch.

```bash
# Installeer Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Dit zal je app bouwen en deployen naar `https://your-app.vercel.app`

### Option 2: Netlify

Netlify is ook een goede optie:

```bash
# Installeer Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Traditionele Hosting (VPS, Shared Hosting, etc.)

1. **Bouw de app**:
   ```bash
   npm run build
   ```

2. **Upload naar je server**:
   - Upload alle bestanden van de `dist/` folder naar je webserver

3. **Server Configuratie**:

   **Apache (.htaccess)**:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>

   # Cache busting voor assets
   <FilesMatch "\.(js|css|woff2?)$">
     Header set Cache-Control "public, max-age=31536000"
   </FilesMatch>

   # Service Worker moet niet gecached worden
   <FilesMatch "sw\.js$">
     Header set Cache-Control "public, max-age=0, must-revalidate"
   </FilesMatch>
   ```

   **Nginx**:
   ```nginx
   server {
     listen 443 ssl http2;
     server_name example.com;

     ssl_certificate /path/to/certificate.crt;
     ssl_certificate_key /path/to/private.key;

     root /var/www/dist;

     # Cache busting
     location ~* \.js$|\.css$|\.woff2?$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }

     # Service Worker
     location = /sw.js {
       expires -1;
       add_header Cache-Control "public, max-age=0, must-revalidate";
     }

     # Manifest
     location = /manifest.json {
       expires -1;
       add_header Cache-Control "public, max-age=0, must-revalidate";
       add_header Content-Type "application/manifest+json";
     }

     # SPA routing
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. **Zorg voor HTTPS**:
   - Gebruik Let's Encrypt (gratis): https://letsencrypt.org/
   - Of koop een certificaat van een CA
   - Omleiding van HTTP naar HTTPS is verplicht

5. **Controleer Service Worker**:
   ```bash
   curl https://example.com/sw.js
   # Moet het service worker bestand teruggeven
   ```

## 🔐 Veiligheidschecklist

- [ ] HTTPS is ingeschakeld
- [ ] Service Worker (sw.js) wordt correct geserved
- [ ] Manifest.json is beschikbaar
- [ ] App icons zijn geüpload
- [ ] Favicon is ingesteld
- [ ] Cache headers zijn correct ingesteld

## 🧪 PWA Testen

Nadat je hebt gedeployed:

1. **Desktop (Chrome)**:
   - Ga naar DevTools (F12)
   - Ga naar `Application > Manifest`
   - Controleer of alle informatie correct is
   - Ga naar `Application > Service Workers`
   - Controleer of Service Worker geregistreerd is

2. **Mobiel**:
   - Open je app op je telefoon
   - Installeer de app (menu → "App installeren")
   - Test offline functionaliteit
   - Controleer dat het icon correct wordt weergegeven

## 📊 Performance Optimalisatie

Na deployment kun je performance testen met:

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

Run Lighthouse in Chrome DevTools (F12 → Lighthouse):
- Performance target: > 90
- Accessibility target: > 90
- Best Practices target: > 90
- SEO target: > 90
- PWA target: ✓

## 🔄 Updates Deployen

Als je code wijzigt:

1. Test lokaal: `npm run dev`
2. Build: `npm run build`
3. Upload naar je server
4. Service Worker wordt automatisch geupdate bij volgende bezoek

## 📱 App Store / Play Store

Voor officiele distributie op app stores:

- **Google Play Store**: Zie [Google Play Web Apps](https://web.dev/publish-install-web-app-play/)
- **Apple App Store**: Momenteel alleen native apps, maar PWA kan worden gebruikt als web app

## 💡 Tips

- Minimaliseer assets voor snellere laadtijden
- Gebruik CDN voor asset delivery
- Zet gzip compression in op je server
- Monitoring instellen voor uptime tracking

## 🆘 Problemen?

Als de app niet werkt na deployment:

1. **Check HTTPS**: Service Workers werken niet over HTTP
2. **Check CORS**: Controleer cross-origin issues in console
3. **Check Service Worker**: `curl https://example.com/sw.js`
4. **Check Manifest**: `curl https://example.com/manifest.json`
5. **Browser console**: Controleer errors met F12

---

Veel succes met je deployment! 🎉

