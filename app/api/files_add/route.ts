
import { parse } from 'form-data';
export async function POST(req: Request) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
  const formData = parse(req.body);
  console.log('data',formData);return;

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
