import { NextRequest, NextResponse } from "next/server";
import nextConnect from 'next-connect';

export async function POST(req:NextRequest) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
  const handler = nextConnect();

// 解析请求体
handler.use(async (req: NextRequest, res: NextResponse) => {
  let requestBody = '';

  req.on('data', (chunk: string) => {
    requestBody += chunk;
  });
  const params = JSON.parse(requestBody);
  console.log('data',params);return;
});

  
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
