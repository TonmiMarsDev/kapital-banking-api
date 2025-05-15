import { Request, Response } from 'express';
import { Account } from '@models/account.model';

const getBalance = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const account = await Account.findOne({ _id: id, user: req.user!.id });
    if (!account) return res.status(404).json({ message: 'Cuenta no encontrada' });

    res.status(200).json({ balance: account.balance });
  } catch (err) {
    res.status(500).json({ message: 'Error al consultar el saldo' });
  }
};

export default getBalance;