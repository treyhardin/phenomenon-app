// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

import cloudflare from '@astrojs/cloudflare';

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

  integrations: [solidJs()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    }
  })
});