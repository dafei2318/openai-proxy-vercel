const formidable = require('formidable');
export async function POST(req: any) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
 
  const form = new formidable.IncomingForm();

    form.parse(req, (err: any, fields: any, files: { fields: any; }) => {
      // if (err) {
      //   // 处理错误
      //   console.error(err);
      //   //return res.status(500).json({ error: 'Something went wrong' });
      // }

      // 在这里处理表单字段和文件
      // fields 包含表单字段的值
      // files 包含上传的文件信息

      // 示例：打印上传的文件名
      console.log(files.fields);return;

      // 返回响应
      //return res.status(200).json({ message: 'Form data processed successfully' });
    });
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
