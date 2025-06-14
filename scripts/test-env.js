
import fs from 'fs'
import 'dotenv/config'

// Load wrangler.jsonc if .env doesn't exist
if (!fs.existsSync('.env') && fs.existsSync('wrangler.jsonc')) {
  const wranglerConfig = JSON.parse(fs.readFileSync('wrangler.jsonc', 'utf8'))
  Object.assign(process.env, wranglerConfig.vars)
}

console.log('MEDIA_BASE_URL:', process.env.MEDIA_BASE_URL)
console.log('SUPABASE_URL:', process.env.SUPABASE_URL)
console.log('CLOUDFLARE_ACCOUNT_ID:', process.env.CLOUDFLARE_ACCOUNT_ID)

