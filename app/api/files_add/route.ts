import { IncomingForm } from 'formidable';
export async function POST(req: Request) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
 
  const form = new IncomingForm();
  form.parse(req, (err, fields, files) => {


    // 获取解析后的表单字段（fields）和文件（files）
    const formData = fields;
    console.log('formData',formData);

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
