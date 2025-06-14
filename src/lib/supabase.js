import { createClient } from '@supabase/supabase-js'
import fs from 'fs';

// Load wrangler.jsonc if .env doesn't exist
if (!fs.existsSync('.env') && fs.existsSync('wrangler.jsonc')) {
  const wranglerConfig = JSON.parse(fs.readFileSync('wrangler.jsonc', 'utf8'))
  Object.assign(process.env, wranglerConfig.vars)
}

export const supabase = createClient(
  process.env.SUPABASE_URL || import.meta.env.SUPABASE_URL, 
  process.env.SUPABASE_PUBLIC_ANON_KEY || import.meta.env.SUPABASE_PUBLIC_ANON_KEY
)