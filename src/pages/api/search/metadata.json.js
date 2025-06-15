export async function GET({ request }) {
  try {
    const baseUrl = process.env.MEDIA_BASE_URL || `https://pub-${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.dev`;
    const response = await fetch(`${baseUrl}/search-data/metadata.json`);
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch metadata' }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }
    
    const metadata = await response.json();
    
    return new Response(JSON.stringify(metadata), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=300' // 5 minutes
      }
    });
  } catch (error) {
    console.error('Error fetching search metadata:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}