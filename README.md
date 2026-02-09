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

**Custom domain:** `public/CNAME` is included in the build so `docs/` contains the CNAME file GitHub needs. Re-run `npm run build` and push so `docs/` has CNAME.

---

### Fixing "There isn't a GitHub Pages site here" (404)

1. **Confirm the branch and folder**
   - Repo **Settings → Pages**
   - Under "Build and deployment", Source must be **Deploy from a branch**
   - Branch: **main** (or your default branch name)
   - Folder: **/docs** (not "root")
   - Click **Save**

2. **Confirm `docs/` is in the repo**
   - Run `npm run build`, then check that the `docs/` folder exists and contains:
     - `index.html`
     - `404.html`
     - `assets/` (JS and CSS)
     - `images/`
     - `CNAME` (for custom domain)
   - Commit and push **including the `docs/` folder** (don’t add `docs/` to `.gitignore`).

3. **Wait for deployment**
   - After pushing, GitHub may take 1–2 minutes to deploy. Check **Settings → Pages** for the deployment status and the published URL.

4. **URL you use**
   - If you use a custom domain: open **https://rayleighstudios.com** (and add the domain in Settings → Pages if you haven’t).
   - If you don’t use a custom domain yet: use the URL GitHub shows (e.g. `https://username.github.io/repo-name/`). For a project repo, the site is at **username.github.io/repo-name/** (with the trailing slash).

