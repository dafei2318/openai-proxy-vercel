export async function POST(req: Request) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
  const response = await fetch(url, { headers });
  const data = await response.json();
    return new Response(JSON.stringify(data), {status: 200});
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
