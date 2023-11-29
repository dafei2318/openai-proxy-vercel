const fs = require('fs');
import multer from 'multer';
import path from 'path';
const os = require('os');
const upload = multer({ dest: os.tmpdir() });
const uploadHandler = upload.single('file'); 
import { NextApiRequest, NextApiResponse } from 'next';
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
   
    const url = 'https://api.openai.com/v1/files';
    const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
  };
 
  uploadHandler(req, res, function (err:any) {
    console.log('file',req)
    // if (err) {
    //   return res.status(500).json({ error: err.message });
    // }
    // const tempFilePath = req.file.path;
    // const fileName = req.file.originalname;
    // res.json({ fileName });
    // fs.unlink(tempFilePath, (err) => {
    //   if (err) {
    //     console.error('Failed to delete temporary file:', err);
    //   }
    // });
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
