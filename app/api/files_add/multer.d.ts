declare module 'multer' {
    import { RequestHandler } from 'express';
  
    interface Multer {
      (options?: any): RequestHandler;
      diskStorage(options: any): any;
    }
  
    const multer: Multer;
  
    export = multer;
  }