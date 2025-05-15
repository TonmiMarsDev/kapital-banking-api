import { Request, Response } from 'express';
import { Transaction } from '@models/transaction.model';

const getTransactionHistory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const transactions = await Transaction.find({ account: id, user: req.user!.id }).sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error al consultar historial' });
  }
};

export default getTransactionHistory;