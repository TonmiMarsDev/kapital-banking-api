import { Request, Response } from 'express';
import { Account } from '@models/account.model';
import { Transaction } from '@models/transaction.model';

const deposit = async (req: Request, res: Response) => {
  try {
    const { accountId, amount } = req.body;

    if (!accountId || !amount || amount <= 0) {
      return res.status(400).json({ message: 'Datos inválidos para depósito' });
    }

    const account = await Account.findOne({ _id: accountId, user: req.user!.id });
    if (!account) {
      return res.status(404).json({ message: 'Cuenta no encontrada' });
    }

    account.balance += amount;
    await account.save();

    const transaction = new Transaction({
      account: account._id,
      type: 'deposit',
      amount
    });
    await transaction.save();

    res.status(200).json({ message: 'Depósito exitoso', account });
  } catch (error) {
    console.error('Error al hacer depósito:', error);
    res.status(500).json({ message: 'Error interno en el servidor' });
  }
};

export default deposit;