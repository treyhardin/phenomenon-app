import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from 'fs';

// Load wrangler.jsonc if .env doesn't exist
if (!fs.existsSync('.env') && fs.existsSync('wrangler.jsonc')) {
  const wranglerConfig = JSON.parse(fs.readFileSync('wrangler.jsonc', 'utf8'))
  Object.assign(process.env, wranglerConfig.vars)
}

export const S3 = new S3Client({
	region: "auto",
	endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID || import.meta.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID || import.meta.env.CLOUDFLARE_ACCESS_KEY_ID,
		secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY || import.meta.env.CLOUDFLARE_SECRET_ACCESS_KEY,
	},
});

export const getSignedMediaUrl = async (key, expiresIn = 604800) => {
  const command = new GetObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET || import.meta.env.CLOUDFLARE_BUCKET,
    Key: key,
  });
  const signedUrl = await getSignedUrl(S3, command, { expiresIn });
  return signedUrl;
}

export const getMimeTypeForKey = async (key) => {
  const command = new HeadObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET || import.meta.env.CLOUDFLARE_BUCKET,
    Key: key,
  });

  const response = await S3.send(command);
  return response.ContentType; // e.g., "video/quicktime"
}