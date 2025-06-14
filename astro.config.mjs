// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import cloudflare from '@astrojs/cloudflare';
import fs from 'fs';

// Load environment variables from wrangler.jsonc for local development
if (!process.env.CF_PAGES && fs.existsSync('wrangler.jsonc')) {
  const wranglerConfig = JSON.parse(fs.readFileSync('wrangler.jsonc', 'utf8'));
  Object.assign(process.env, wranglerConfig.vars);
}

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

  vite: {
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
      'process.env.SUPABASE_PUBLIC_ANON_KEY': JSON.stringify(process.env.SUPABASE_PUBLIC_ANON_KEY),
      'process.env.CLOUDFLARE_ACCOUNT_ID': JSON.stringify(process.env.CLOUDFLARE_ACCOUNT_ID),
      'process.env.CLOUDFLARE_ACCESS_KEY_ID': JSON.stringify(process.env.CLOUDFLARE_ACCESS_KEY_ID),
      'process.env.CLOUDFLARE_SECRET_ACCESS_KEY': JSON.stringify(process.env.CLOUDFLARE_SECRET_ACCESS_KEY),
      'process.env.CLOUDFLARE_BUCKET': JSON.stringify(process.env.CLOUDFLARE_BUCKET),
      'process.env.MEDIA_BASE_URL': JSON.stringify(process.env.MEDIA_BASE_URL),
    }
  },

  integrations: [solidJs()],
  adapter: cloudflare()
});