import fs from 'fs';
import https from 'https';
import path from 'path';
import 'dotenv/config';

import {
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLIC_ANON_KEY
);

export const checkIsVideo = (url) => {
  const videoExtensions = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mov', '.mp4'] //you can add more extensions
  let isVideo = false
  videoExtensions.map((e) => {
    if (url.toLowerCase().includes(e)) return isVideo = true
  })
  return isVideo
}

const getMimeType = (filename) => {
  const ext = path.extname(filename).toLowerCase();
  const map = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
  };
  return map[ext] || 'application/octet-stream';
};

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
  },
});

const getExistingKeys = async () => {
  const existingKeys = new Set();
  let continuationToken = undefined;

  do {
    const command = new ListObjectsV2Command({
      Bucket: process.env.CLOUDFLARE_BUCKET,
      ContinuationToken: continuationToken,
    });

    const response = await S3.send(command);
    continuationToken = response.IsTruncated ? response.NextContinuationToken : undefined;

    (response.Contents || []).forEach(object => {
      existingKeys.add(object.Key);
    });
  } while (continuationToken);

  return existingKeys;
};

const getMedia = async () => {
	const { data, error } = await supabase
		.from('media_urls')
      .select()
  // return data
  if (!data) return null
	return data.flatMap((record, i) => {
    return record.media.map((media) => {
      return {
        record: record.id,
        url: media,
        filename: media.substring(media.lastIndexOf("/") + 1).replace("?", "-")
        // filename: `${record.id}_${i}`
      }
    })
  }).filter(item => item !== undefined)
}

const FAILED_URLS_FILE = path.join(process.cwd(), 'failed-urls.json');

const loadFailedUrls = () => {
  try {
    console.log(`🔍 Looking for failed URLs file at: ${FAILED_URLS_FILE}`);
    if (fs.existsSync(FAILED_URLS_FILE)) {
      const data = JSON.parse(fs.readFileSync(FAILED_URLS_FILE, 'utf8'));
      console.log(`📄 Loaded ${data.length} failed URLs from file`);
      return new Set(data);
    } else {
      console.log('📄 No failed URLs file found, creating empty file');
      fs.writeFileSync(FAILED_URLS_FILE, '[]');
    }
  } catch (err) {
    console.warn('⚠️ Could not load failed URLs file:', err.message);
  }
  return new Set();
};

const saveFailedUrls = (failedUrls) => {
  try {
    console.log(`💾 Saving ${failedUrls.size} failed URLs to: ${FAILED_URLS_FILE}`);
    fs.writeFileSync(FAILED_URLS_FILE, JSON.stringify([...failedUrls], null, 2));
    console.log('✅ Failed URLs file saved successfully');
  } catch (err) {
    console.warn('⚠️ Could not save failed URLs file:', err.message);
  }
};

const downloadAndUpload = (url) =>
  new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`Download failed: ${response.statusCode}`));
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });

const uploadToS3 = async (key, buffer) => {
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: getMimeType(key),
    });

    await S3.send(command);
  } catch (err) {
    console.error(`🛑 Upload error for ${key}: ${err.name} – ${err.message}`);
    throw err;
  }
};


const processMedia = async ({ record, url, filename }, existingKeys, failedUrls) => {
  const key = `${record}/${filename}`;

  if (existingKeys.has(key)) {
    console.log(`⚠️ Skipping existing file: ${key}`);
    return { success: true, skipped: true };
  }

  if (failedUrls.has(url)) {
    console.log(`🚫 Skipping previously failed URL: ${url}`);
    return { success: true, skipped: true };
  }

  try {
    console.log(`⬇️ Downloading ${url}`);
    const buffer = await downloadAndUpload(url);

    console.log(`⬆️ Uploading to S3: ${key}`);
    await uploadToS3(key, buffer);
    return { success: true };
  } catch (err) {
    console.error(`❌ Failed for ${url}: ${err.message}`);
    
    // Track 404s and other permanent failures
    if (err.message.includes('404') || err.message.includes('403') || err.message.includes('410')) {
      failedUrls.add(url);
      console.log(`📝 Added ${url} to failed URLs list`);
      saveFailedUrls(failedUrls); // Save immediately
      return { success: false, permanentFailure: true };
    }
    
    return { success: false, permanentFailure: false };
  }
};

const main = async () => {
  console.log('📋 Fetching media list, existing files, and failed URLs...');
  const [media, existingKeys, failedUrls] = await Promise.all([
    getMedia(),
    getExistingKeys(),
    Promise.resolve(loadFailedUrls())
  ]);
  
  const newFiles = media.filter(({ record, filename, url }) => 
    !existingKeys.has(`${record}/${filename}`) && !failedUrls.has(url)
  );
  
  console.log(`📊 Found ${media.length} total files, ${failedUrls.size} known failures, ${newFiles.length} new files to process`);
  
  if (newFiles.length === 0) {
    console.log('✅ All files already exist or have failed before, nothing to do!');
    return;
  }
  
  let newFailures = 0;
  
  // Process in batches of 5 to avoid overwhelming the network
  const batchSize = 5;
  for (let i = 0; i < newFiles.length; i += batchSize) {
    const batch = newFiles.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(file => processMedia(file, existingKeys, failedUrls)));
    
    newFailures += results.filter(r => r.permanentFailure).length;
  }

  // Final summary
  if (newFailures > 0) {
    console.log(`📝 Total ${newFailures} new failed URLs added during this run`);
  }

  console.log('✅ Done!');
};

main().catch(console.error);