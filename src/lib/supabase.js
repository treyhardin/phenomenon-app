import { createClient } from '@supabase/supabase-js'
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export const supabase = createClient(
  env.SUPABASE_URL, 
  env.SUPABASE_PUBLIC_ANON_KEY
)