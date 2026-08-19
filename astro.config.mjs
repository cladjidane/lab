// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabiencanu.fr',
  // Toutes les pages restent générées à l'avance. Seule /api/newsletter
  // s'exécute à la demande (prerender = false), d'où l'adaptateur Vercel.
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // nodemailer reste un module Node, il ne doit pas être empaqueté par Vite.
    ssr: { external: ['nodemailer'] }
  }
});
