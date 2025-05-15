import { Request, Response } from 'express';
import { Account } from '@models/account.model';

const createAccount = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre de la cuenta es obligatorio' });
    }

    const newAccount = new Account({
      user: req.user!.id,
      name,
      balance: 0,
    });

    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {    
    res.status(500).json({ message: 'Error al crear la cuenta' });
  }
};

export default createAccount;
