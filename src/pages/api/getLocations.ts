import { getCollection } from "astro:content";

export async function GET({ params, request }) {

  const countries = await getCollection('countries')
  const states = await getCollection('states')
  const cities = await getCollection('cities')

  return new Response(
    JSON.stringify({
      countries,
      states,
      cities
    }),
  );
}