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

const objectExists = async (key) => {
  try {
    await S3.send(new HeadObjectCommand({
      Bucket: process.env.CLOUDFLARE_BUCKET,
      Key: key,
    }));
    return true; // object exists
  } catch (err) {
    if (err.name === 'NotFound') return false;
    throw err; // some other error (e.g., auth)
  }
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

const media = await getMedia()
// console.log(media)

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


const main = async () => {
  const media = await getMedia();

  for (const { record, url, filename } of media) {
    const key = `${record}/${filename}`;

    const exists = await objectExists(key);
    if (exists) {
      console.log(`⚠️ Skipping existing file: ${key}`);
      continue;
    }

    try {
      console.log(`⬇️ Downloading ${url}`);
      const buffer = await downloadAndUpload(url);

      console.log(`⬆️ Uploading to S3: ${key}`);
      await uploadToS3(key, buffer);
    } catch (err) {
      console.error(`❌ Failed for ${url}: ${err.message}`);
    }
  }

  console.log('✅ Done!');
};

main().catch(console.error);