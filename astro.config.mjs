import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  /*Líneas para setear el deploy para github pages*/
  site: 'https://Kratogans.github.io',
  base: '/Portfolio',
  /* Integración de tailwind */
  integrations: [tailwind()]
});