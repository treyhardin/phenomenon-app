import { defineCollection, z } from 'astro:content';
import fs from 'fs';
import { supabase } from './lib/supabase';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getMimeTypeForKey, getSignedMediaUrl, S3 } from './lib/r2-queries';
import { loadEnv } from "vite";

// Load wrangler.jsonc if .env doesn't exist
if (!fs.existsSync('.env') && fs.existsSync('wrangler.jsonc')) {
  const wranglerConfig = JSON.parse(fs.readFileSync('wrangler.jsonc', 'utf8'))
  Object.assign(process.env, wranglerConfig.vars)
}

const countries = defineCollection({
  loader: async () => {

    let { data: countries, error } = await supabase
      .from('Lookup Country')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    if (error) console.log(error)
    return countries.map((country) => ({ id: country.id, ...country }))
  }
});

const states = defineCollection({
  loader: async () => {

    let { data: states, error } = await supabase
      .from('Lookup State')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    if (error) console.log(error)
    return states.map((state) => ({ id: state.id, ...state }))
  }
});

const cities = defineCollection({
  loader: async () => {

    let { data: cities, error } = await supabase
      .from('Lookup City')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    if (error) console.log(error)
    return cities.map((city) => ({ id: city.id, ...city }))
  }
});

const shapes = defineCollection({
  loader: async () => {

    let { data: shapes, error } = await supabase
      .from('Lookup Shape')
      .select('*')
      .order('record_count', { ascending: false })

    if (error) console.log(error)
    return shapes.map((shape) => ({ id: shape.id, ...shape }))
  }
});

const media = defineCollection({
  loader: async () => {

    const result = {};
    let continuationToken = undefined;
  
    
    do {
      const command = new ListObjectsV2Command({
        Bucket: process.env.CLOUDFLARE_BUCKET,
        ContinuationToken: continuationToken,
      });
  
      const response = await S3.send(command);
      continuationToken = response.IsTruncated ? response.NextContinuationToken : undefined;
  
      // console.log(response.Contents)
      const batch = await Promise.all(
        (response.Contents || [])
          .filter((object) => object.Key.includes('/'))
          .map(async (object) => {
            const key = object.Key;
            const [directory] = key.split('/');

            const [url, type] = await Promise.all([
              `${process.env.MEDIA_BASE_URL || `https://pub-${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.dev`}/${key}`,
              getMimeTypeForKey(key)
            ]);

            return { directory, asset: { url, type } };
          })
      );

      // Group assets by directory
      for (const { directory, asset } of batch) {
        if (!result[directory]) result[directory] = [];
        result[directory].push(asset);
      }
    } while (continuationToken);
  
    return Object.keys(result).map((record) => {
      return {
        id: record,
        assets: result[record]
      }
    })

  }
})


export const collections = { 
  countries, 
  states,
  cities,
  shapes,
  media
};