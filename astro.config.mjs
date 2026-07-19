// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  fonts: [{
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-geist',
  }, {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
  }],

  integrations: [mdx()],
});