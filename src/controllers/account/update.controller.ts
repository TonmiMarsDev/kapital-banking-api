import { Request, Response } from 'express';
import { Account } from '@models/account.model';

const updateAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updated = await Account.findOneAndUpdate(
      { _id: id, user: req.user!.id },
      { name },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Cuenta no encontrada o no autorizada' });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la cuenta' });
  }
};

export default updateAccount;