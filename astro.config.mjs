// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: "https://chukwali.netlify.app",
  fonts: [{
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-geist',
  }, {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
  }],

  integrations: [mdx(), svelte()],
});
