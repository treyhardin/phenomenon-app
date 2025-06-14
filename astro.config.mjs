// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from "vite";

const {
  SUPABASE_URL,
  SUPABASE_PUBLIC_ANON_KEY,
  CLOUDFLARE_ACCOUNT_ID,
  CLOUDFLARE_ACCESS_KEY_ID,
  CLOUDFLARE_SECRET_ACCESS_KEY,
  CLOUDFLARE_BUCKET,
  MEDIA_BASE_URL
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

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
      'process.env.SUPABASE_URL': JSON.stringify(SUPABASE_URL),
      'process.env.SUPABASE_PUBLIC_ANON_KEY': JSON.stringify(SUPABASE_PUBLIC_ANON_KEY),
      'process.env.CLOUDFLARE_ACCOUNT_ID': JSON.stringify(CLOUDFLARE_ACCOUNT_ID),
      'process.env.CLOUDFLARE_ACCESS_KEY_ID': JSON.stringify(CLOUDFLARE_ACCESS_KEY_ID),
      'process.env.CLOUDFLARE_SECRET_ACCESS_KEY': JSON.stringify(CLOUDFLARE_SECRET_ACCESS_KEY),
      'process.env.CLOUDFLARE_BUCKET': JSON.stringify(CLOUDFLARE_BUCKET),
      'process.env.MEDIA_BASE_URL': JSON.stringify(MEDIA_BASE_URL),
    }
  },

  integrations: [solidJs()],
  adapter: cloudflare()
});