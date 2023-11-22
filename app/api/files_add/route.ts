import { NextRequest, NextResponse } from "next/server";
import bodyParser from 'body-parser';
export async function POST(req:NextRequest,res:NextResponse) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
  bodyParser.urlencoded({ extended: true })(req, res, () => {
    console.log(req.body); // 输出客户端发送的参数
    res.end();
    return;
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
