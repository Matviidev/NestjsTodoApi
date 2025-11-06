import { Request } from 'express';
import { AuthRequest } from 'src/users/dto/auth.request';

declare module 'express' {
  interface Request {
    user?: AuthRequest;
  }
}
