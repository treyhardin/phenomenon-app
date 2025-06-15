import { createClient } from '@supabase/supabase-js'
import { loadEnv } from 'vite';

console.log('=== DEBUG INFO ===');
console.log('=== ALL AVAILABLE ENV VARS ===');
const allKeys = Object.keys(process.env).sort();
console.log('Total env vars:', allKeys.length);
console.log('All keys:', allKeys);

// Look for your specific variable with different naming
console.log('Looking for TEST_ENV variations:');
allKeys.forEach(key => {
  if (key.toLowerCase().includes('test')) {
    console.log(`${key}: ${process.env[key]}`);
  }
});
// Remove import.meta.env - this won't work in Node.js
console.log(`PLEASE WORKKKK: ${env.VITE_TEST_ENV || process.env.VITE_TEST_ENV || 'STILL UNDEFINED'}`);

export const supabase = createClient(
  env.SUPABASE_URL, 
  env.SUPABASE_PUBLIC_ANON_KEY
)