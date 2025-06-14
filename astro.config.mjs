// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mufoncms.com',
      },
      {
        protocol: 'https',
        hostname: 'nuforc.org',
      }
    ],
  },

  integrations: [solidJs()]
});