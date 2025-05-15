import { Request, Response } from 'express';
import User from '@models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Credenciales inválidas' });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ message: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '2h' });
    res.json({ token });
    
  } catch (error) {
    res.json({status: 500, error})
  }

};

export default login;
