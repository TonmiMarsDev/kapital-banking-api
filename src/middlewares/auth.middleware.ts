import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user.model';

interface AuthPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: Pick<IUser, 'id' | 'role' | 'username' | 'email'>;
    }
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as AuthPayload;
    const user = await User.findById(decoded.id);

    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Usuario inválido o inactivo' });
    }

    req.user = {
      id: user.id,
      role: user.role,
      username: user.username,
      email: user.email
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};
