import { Request, Response } from 'express';
import User from '@models/user.model';
import bcrypt from 'bcryptjs';

const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const existing = await User.findOne({ email });
    
  if (existing) return res.status(400).json({ message: 'Usuario ya existe' });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, passwordHash });

  res.status(201).json({ message: 'Usuario registrado' });
};

export default register;