
// Test environment variables
import 'dotenv/config'

// In Node.js scripts, use process.env instead of import.meta.env
console.log('MEDIA_BASE_URL:', process.env.MEDIA_BASE_URL)
console.log('SUPABASE_URL:', process.env.SUPABASE_URL)
console.log('CLOUDFLARE_ACCOUNT_ID:', process.env.CLOUDFLARE_ACCOUNT_ID)

// Test if all required vars are present
const requiredVars = [
  'SUPABASE_URL',
  'SUPABASE_PUBLIC_ANON_KEY', 
  'PUBLIC_MAPBOX_TOKEN',
  'CLOUDFLARE_ACCOUNT_ID',
  'CLOUDFLARE_ACCESS_KEY_ID',
  'CLOUDFLARE_SECRET_ACCESS_KEY',
  'CLOUDFLARE_BUCKET',
  'MEDIA_BASE_URL'
]

console.log('\nEnvironment Variables Check:')
requiredVars.forEach(varName => {
  const value = process.env[varName]
  console.log(`${varName}: ${value ? '✅ Set' : '❌ Missing'}`)
})

console.log(process.env.SUPABASE_URL)