import { createClient } from '@supabase/supabase-js'
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

console.log(`PLEASE WORKKKK: ${env.VITE_TEST_ENV || process.env.VITE_TEST_ENV || import.meta.env.VITE_TEST_ENV}`)

export const supabase = createClient(
  env.SUPABASE_URL, 
  env.SUPABASE_PUBLIC_ANON_KEY
)