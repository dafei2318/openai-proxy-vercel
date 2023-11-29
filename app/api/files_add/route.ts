import multer from 'multer';
import path from 'path';
const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(process.cwd(), 'public/uploads/'), 
    filename: (req: any, file: any, cb:any) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  }),
});
export async function POST(req: any) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
 
  const { originalname, filename, path } = req.file;

      console.log('file',req.file);return;
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
