import { Request, Response } from 'express';
import { Account } from '@models/account.model';

const getAccounts = async (req: Request, res: Response) => {
  try {
    const accounts = await Account.find({ user: req.user!.id });
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener cuentas' });
  }
};

export default getAccounts;