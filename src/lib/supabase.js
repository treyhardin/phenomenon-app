import { createClient } from '@supabase/supabase-js'
import { loadEnv } from 'vite';

console.log('=== DETAILED DEBUG ===');

// Test different ways of accessing the same variable
const bucket = process.env.CLOUDFLARE_BUCKET;
const bucket2 = process.env['CLOUDFLARE_BUCKET'];

console.log('Direct access:', bucket);
console.log('Bracket access:', bucket2);
console.log('typeof bucket:', typeof bucket);
console.log('bucket === undefined:', bucket === undefined);
console.log('bucket === "":', bucket === '');
console.log('bucket length:', bucket?.length);

// Check if it's a descriptor issue
const descriptor = Object.getOwnPropertyDescriptor(process.env, 'CLOUDFLARE_BUCKET');
console.log('Property descriptor:', descriptor);

// Test with different variables
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('CF_PAGES:', process.env.CF_PAGES);
console.log('CLOUDFLARE_BUCKET:', process.env.CLOUDFLARE_BUCKET);
console.log('BUCKET:', process.env.BUCKET);

// Try iterating through all env vars to see which ones actually have values
console.log('=== VARS WITH VALUES ===');
Object.entries(process.env).forEach(([key, value]) => {
  if (value && value.length > 0) {
    console.log(`${key}: ${value.substring(0, 20)}...`); // Show first 20 chars
  } else {
    console.log(`${key}: [EMPTY OR UNDEFINED]`);
  }
});

export const supabase = createClient(
  env.SUPABASE_URL, 
  env.SUPABASE_PUBLIC_ANON_KEY
)