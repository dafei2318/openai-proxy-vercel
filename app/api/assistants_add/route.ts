export async function POST(req: Request) {
  try {
   
    const url = 'https://api.openai.com/v1/assistants';
    const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    'OpenAI-Beta': 'assistants=v1'
  };
  const payload = await req.json();
  const response = await fetch(url, { headers,body:payload });
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
