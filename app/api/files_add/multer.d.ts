declare module 'multer' {
    import { RequestHandler } from 'express';
  
    interface Multer {
      (options?: any): RequestHandler;
    }
  
    const multer: Multer;
  
    export = multer;
  }