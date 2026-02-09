# Rayleigh Studios Website

A modern, responsive website for Rayleigh Studios game development company, built with **React** and shared Header/Footer components so you only maintain them in one place.

## Features

- 🎨 Modern, sleek design with gradient effects
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ React + Vite for fast dev and builds
- 🧩 Single Header and Footer used across all pages
- 🎮 Game studio themed UI/UX
- 📧 Contact form ready for integration
- 🎯 Smooth scrolling navigation

## Tech Stack

- **React 18** – UI components and routing
- **React Router 6** – Client-side routes (/, /press-release)
- **Vite** – Build tool and dev server
- **Bootstrap 5** – Responsive layout (CDN)
- **Bootstrap Icons** – Icons
- **Google Fonts** – Orbitron & Inter

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173. Edit `src/components/Header.jsx` or `src/components/Footer.jsx` once and the change appears on every page.

## Build & GitHub Pages

The site is built for **GitHub Pages** (including custom domain):

1. **Build** (output goes to `docs/` so GitHub can serve it):

   ```bash
   npm run build
   ```

2. **GitHub repo settings**
   - **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** (or your default branch)
   - Folder: **/docs**
   - Save

3. **Deploy**
   - Commit and push the `docs/` folder (and the rest of the repo) after each `npm run build`.
   - The build script also copies `index.html` to `404.html` so routes like `/press-release` work on refresh.

4. **Static assets**
   - Put images in `public/images/` (e.g. `public/images/dont-crack-game.jpg`).
   - Put press release assets in `public/assets/` (logos, screenshots, etc.). They are copied to the root of the built site.

If the site is under a repo path (e.g. `username.github.io/repo-name`), set `base: '/repo-name/'` in `vite.config.js` and rebuild.

