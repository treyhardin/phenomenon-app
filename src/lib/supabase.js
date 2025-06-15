import { createClient } from '@supabase/supabase-js'
import { loadEnv } from 'vite';

console.log('=== DEBUG INFO ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('Current working directory:', process.cwd());
console.log('All process.env keys:', Object.keys(process.env).filter(key => key.includes('VITE')));

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
console.log('loadEnv result keys:', Object.keys(env).filter(key => key.includes('VITE')));
console.log('loadEnv VITE_TEST_ENV:', env.VITE_TEST_ENV);
console.log('process.env VITE_TEST_ENV:', process.env.VITE_TEST_ENV);

// Remove import.meta.env - this won't work in Node.js
console.log(`PLEASE WORKKKK: ${env.VITE_TEST_ENV || process.env.VITE_TEST_ENV || 'STILL UNDEFINED'}`);

export const supabase = createClient(
  env.SUPABASE_URL, 
  env.SUPABASE_PUBLIC_ANON_KEY
)