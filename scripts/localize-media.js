import fs from 'fs';
import https from 'https';
import path from 'path';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_PUBLIC_ANON_KEY
)


const getMedia = async () => {
	const { data, error } = await supabase
		.from('media_urls')
      .select()
  // return data
	return data.flatMap((record, i) => {
    return record.media.map((media) => ({
        record: record.id,
        url: media,
        filename: media.substring(media.lastIndexOf("/") + 1).replace("?", "-")
        // filename: `${record.id}_${i}`
    }))
  })
}

const media = await getMedia()
// console.log(media)

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });

const main = async () => {
  const destDir = path.resolve('public/media');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  for (const { record, url, filename } of media) {

    const subDir = path.join(destDir, record);
    if (!fs.existsSync(subDir)) {
      fs.mkdirSync(subDir, { recursive: true });
    }

    const destPath = path.join(destDir, record, filename);
    if (!fs.existsSync(destPath)) {

      console.log(`Downloading ${filename}...`);
      try {
        await download(url, destPath);
      } catch (err) {
        console.error(`❌ Failed to download ${filename}: ${err.message}`);
        continue; // skip to the next file
      }

      // await download(url, destPath);
    }
  }
};

main().catch(console.error);