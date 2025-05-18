import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const S3 = new S3Client({
	region: "auto",
	endpoint: `https://${import.meta.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: import.meta.env.CLOUDFLARE_ACCESS_KEY_ID,
		secretAccessKey: import.meta.env.CLOUDFLARE_SECRET_ACCESS_KEY,
	},
});

export const getSignedMediaUrl = async (key, expiresIn = 3600) => {
  const command = new GetObjectCommand({
    Bucket: import.meta.env.CLOUDFLARE_BUCKET,
    Key: key,
  });
  const signedUrl = await getSignedUrl(S3, command, { expiresIn });
  return signedUrl;
}

export const getMimeTypeForKey = async (key) => {
  const command = new HeadObjectCommand({
    Bucket: import.meta.env.CLOUDFLARE_BUCKET,
    Key: key,
  });

  const response = await S3.send(command);
  return response.ContentType; // e.g., "video/quicktime"
}