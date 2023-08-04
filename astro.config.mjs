import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://etrexlabs.github.io',
  base: '/',
  integrations: [tailwind()]
});
