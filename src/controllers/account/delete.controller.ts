import { Request, Response } from 'express';
import { Account } from '@models/account.model';

const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await Account.findOneAndDelete({ _id: id, user: req.user!.id });

    if (!deleted) {
      return res.status(404).json({ message: 'Cuenta no encontrada o no autorizada' });
    }

    res.status(200).json({ message: 'Cuenta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la cuenta' });
  }
};

export default deleteAccount;

