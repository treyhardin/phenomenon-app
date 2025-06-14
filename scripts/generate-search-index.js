import fs from 'fs';
import 'dotenv/config';

// Load wrangler.jsonc if .env doesn't exist
if (!fs.existsSync('.env') && fs.existsSync('wrangler.jsonc')) {
  const wranglerConfig = JSON.parse(fs.readFileSync('wrangler.jsonc', 'utf8'))
  Object.assign(process.env, wranglerConfig.vars)
}
import { createClient } from '@supabase/supabase-js';
import flexsearch from 'flexsearch';
const { Document } = flexsearch
import { removeStopwords } from 'stopword'

import 'dotenv/config'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLIC_ANON_KEY
);

const generateSearchIndex = async () => {
  console.log('📋 Fetching reports from database...');
  
  const { data: reports, error } = await supabase
    .from('clean_data_mv')
    .select(`
      id, 
      summary,
      canonical_city,
      canonical_state,
      canonical_country, 
      shape,
      dateOccurred,
      content
    `)
    .order('dateOccurred', { ascending: false });

  if (error) {
    console.error('❌ Error fetching reports:', error);
    throw error;
}

  console.log(`📊 Processing ${reports.length} reports...`);
  
  // Create simple search data - just essential info for lightweight client-side search
  const searchData = reports.map(report => ({
    id: report.id,
    summary: (report.summary ? removeStopwords(report.summary.split(' ')).join(' ') : ''),
    city: report.canonical_city || '',
    state: report.canonical_state || '',
    country: report.canonical_country || '',
    shape: report.shape || '',
    dateOccurred: report.dateOccurred,
    content: (report.content ? removeStopwords(report.content.split(' ')).join(' ') : ''),
    // Create searchable text combining all fields
    searchText: [
      (report.summary ? removeStopwords(report.summary.split(' ')).join(' ') : ''),
      report.canonical_city || '',
      report.canonical_state || '',
      report.canonical_country || '',
      report.shape || '',
      (report.content ? removeStopwords(report.content.slice(0, 300).split(' ')).join(' ') : '')
    ].join(' ').toLowerCase()
  }));

  console.log('💾 Creating simple search index...');
  
  // Ensure public directory exists
  if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
  }

  // Write the simple search data directly - no FlexSearch needed
  fs.writeFileSync('./public/search-data.json', JSON.stringify(searchData));
  
  const dataSize = (fs.statSync('./public/search-data.json').size / 1024 / 1024).toFixed(2);
  
  console.log(`✅ Generated simple search data with ${searchData.length} reports`);
  console.log(`📄 Search data file size: ${dataSize} MB`);
  console.log('🔍 Search data exported to public/search-data.json');
};

generateSearchIndex().catch(console.error);