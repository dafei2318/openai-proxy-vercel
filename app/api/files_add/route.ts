import { parse } from 'querystring';
export async function POST(req: any) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
 
  let body = '';

    req.on('data', (chunk: string) => {
      body += chunk;
    });

    req.on('end', () => {
      const formData = parse(body);
      console.log('Form data:', formData);
      //res.status(200).json({ message: 'Form data received successfully' });
    });
    return;
  
  // const body = new FormData();
  // body.append('purpose',get_data.purpose);
  // body.append('file',file);
  const response = await fetch(url, { method:'POST',headers:headers });
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
