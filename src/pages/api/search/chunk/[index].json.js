export async function GET({ params, request }) {
  try {
    const { index } = params;
    
    // Validate chunk index
    if (!index || isNaN(parseInt(index))) {
      return new Response(JSON.stringify({ error: 'Invalid chunk index' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    
    const baseUrl = process.env.MEDIA_BASE_URL || `https://pub-${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.dev`;
    const response = await fetch(`${baseUrl}/search-data/search-chunk-${index}.json`);
    
    if (!response.ok) {
      return new Response(JSON.stringify({ error: `Failed to fetch chunk ${index}` }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    
    const chunkData = await response.json();
    
    return new Response(JSON.stringify(chunkData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=3600' // 1 hour
      }
    });
  } catch (error) {
    console.error(`Error fetching search chunk ${params.index}:`, error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

export async function getStaticPaths() {
  // Pre-generate paths for chunk indices 0-20 (adjust based on your needs)
  return Array.from({ length: 21 }, (_, i) => ({ params: { index: i.toString() } }));
}