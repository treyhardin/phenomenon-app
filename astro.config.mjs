// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from "vite";

// Load environment variables - prioritize process.env for Cloudflare Pages
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

const SUPABASE_URL = process.env.SUPABASE_URL || env.SUPABASE_URL;
const SUPABASE_PUBLIC_ANON_KEY = process.env.SUPABASE_PUBLIC_ANON_KEY || env.SUPABASE_PUBLIC_ANON_KEY;
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_ACCESS_KEY_ID = process.env.CLOUDFLARE_ACCESS_KEY_ID || env.CLOUDFLARE_ACCESS_KEY_ID;
const CLOUDFLARE_SECRET_ACCESS_KEY = process.env.CLOUDFLARE_SECRET_ACCESS_KEY || env.CLOUDFLARE_SECRET_ACCESS_KEY;
const CLOUDFLARE_BUCKET = process.env.CLOUDFLARE_BUCKET || env.CLOUDFLARE_BUCKET;
const R2_BUCKET = process.env.R2_BUCKET || env.R2_BUCKET;
const MEDIA_BASE_URL = process.env.MEDIA_BASE_URL || env.MEDIA_BASE_URL;

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
      'process.env.R2_BUCKET': JSON.stringify(R2_BUCKET),
      'process.env.MEDIA_BASE_URL': JSON.stringify(MEDIA_BASE_URL),
    }
  },

  integrations: [solidJs()],
  adapter: cloudflare()
});