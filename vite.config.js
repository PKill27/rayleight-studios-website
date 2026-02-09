import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: use base '/' for custom domain (e.g. rayleighstudios.com)
// If using a project repo URL (user.github.io/repo-name), set base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
  },
});
