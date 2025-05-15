import { IUser } from '@models/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: Pick<IUser, 'id' | 'role' | 'username' | 'email'>;
    }
  }
}