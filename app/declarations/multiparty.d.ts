declare module 'multiparty' {
    import { IncomingMessage } from 'http';
  
    export interface Fields {
      [fieldName: string]: string | string[];
    }
  
    export interface Files {
      [fieldName: string]: File[];
    }
  
    export interface File {
      fieldName: string;
      originalFilename: string;
      path: string;
      headers: any;
      size: number;
    }
  
    export class Form {
      constructor(options?: any);
  
      parse(req: IncomingMessage, callback: (err: Error, fields: Fields, files: Files) => void): void;
    }
  }
  