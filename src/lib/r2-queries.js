import { GetObjectCommand, HeadObjectCommand, ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const S3 = new S3Client({
	region: "auto",
	endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY_ID,
		secretAccessKey: process.env.CLOUDFLARE_SECRET_ACCESS_KEY,
	},
});

export const getSignedMediaUrl = async (key, expiresIn = 604800) => {
  const command = new GetObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET,
    Key: key,
  });
  const signedUrl = await getSignedUrl(S3, command, { expiresIn });
  return signedUrl;
}

export const getMimeTypeForKey = async (key) => {
  const command = new HeadObjectCommand({
    Bucket: process.env.CLOUDFLARE_BUCKET,
    Key: key,
  });

  const response = await S3.send(command);
  return response.ContentType; // e.g., "video/quicktime"
}

export const getMediaById = async (id) => {
  const command = new ListObjectsV2Command({
    Bucket: process.env.CLOUDFLARE_BUCKET,
    Prefix: `${id}/`,
  });

  const response = await S3.send(command);
  
  if (!response.Contents || response.Contents.length === 0) {
    return [];
  }

  // Get media info for each object in the directory
  const mediaAssets = await Promise.all(
    response.Contents
      .filter(object => object.Key) // Filter out objects without keys
      .map(async (object) => {
        const key = object.Key; // We know it exists due to filter
        const filename = key.split('/').pop() || key; // Fallback to full key if no filename
        
        const [url, mimeType] = await Promise.all([
          getSignedMediaUrl(key),
          getMimeTypeForKey(key)
        ]);

        return {
          key,
          filename,
          url,
          mimeType: mimeType || 'application/octet-stream', // Fallback MIME type
          size: object.Size || 0,
          lastModified: object.LastModified || new Date()
        };
      })
  );

  return mediaAssets;
}