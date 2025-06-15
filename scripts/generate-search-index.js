import fs from 'fs';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import flexsearch from 'flexsearch';
const { Document } = flexsearch
import { removeStopwords } from 'stopword'
import { S3, PutObjectCommand } from '@aws-sdk/client-s3';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLIC_ANON_KEY
);

// Initialize R2 client
const r2Client = new S3({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
  },
});

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

  console.log('💾 Creating chunked search index...');
  
  // Create chunks of ~20MB each (approximately 15,000-20,000 records per chunk)
  const CHUNK_SIZE = 15000;
  const chunks = [];
  
  for (let i = 0; i < searchData.length; i += CHUNK_SIZE) {
    const chunk = searchData.slice(i, i + CHUNK_SIZE);
    const chunkIndex = Math.floor(i / CHUNK_SIZE);
    chunks.push({
      index: chunkIndex,
      data: chunk,
      count: chunk.length,
      startDate: chunk[chunk.length - 1]?.dateOccurred, // Most recent in chunk (data is desc by date)
      endDate: chunk[0]?.dateOccurred // Oldest in chunk
    });
  }

  console.log(`📦 Created ${chunks.length} chunks`);

  // Create metadata file
  const metadata = {
    totalRecords: searchData.length,
    totalChunks: chunks.length,
    chunkSize: CHUNK_SIZE,
    chunks: chunks.map(chunk => ({
      index: chunk.index,
      count: chunk.count,
      startDate: chunk.startDate,
      endDate: chunk.endDate,
      filename: `search-chunk-${chunk.index}.json`
    })),
    lastUpdated: new Date().toISOString()
  };

  // Upload chunks to R2
  console.log('☁️ Uploading chunks to R2...');
  
  const uploadPromises = chunks.map(async (chunk) => {
    const key = `search-data/search-chunk-${chunk.index}.json`;
    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET,
      Key: key,
      Body: JSON.stringify(chunk.data),
      ContentType: 'application/json',
      CacheControl: 'public, max-age=3600' // Cache for 1 hour
    });
    
    await r2Client.send(command);
    const chunkSize = (JSON.stringify(chunk.data).length / 1024 / 1024).toFixed(2);
    console.log(`  ✅ Uploaded chunk ${chunk.index} (${chunk.count} records, ${chunkSize}MB)`);
  });

  // Upload metadata
  const metadataCommand = new PutObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET,
    Key: 'search-data/metadata.json',
    Body: JSON.stringify(metadata, null, 2),
    ContentType: 'application/json',
    CacheControl: 'public, max-age=300' // Cache for 5 minutes
  });

  await Promise.all([...uploadPromises, r2Client.send(metadataCommand)]);

  const totalSize = (JSON.stringify(searchData).length / 1024 / 1024).toFixed(2);
  console.log(`✅ Generated and uploaded chunked search index`);
  console.log(`📊 Total: ${searchData.length} records in ${chunks.length} chunks`);
  console.log(`📄 Total data size: ${totalSize}MB`);
  console.log(`☁️ Uploaded to R2: search-data/`);
};

generateSearchIndex().catch(console.error);