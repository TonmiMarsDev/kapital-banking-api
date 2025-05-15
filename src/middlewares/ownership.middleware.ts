import { Request, Response, NextFunction } from 'express';
import { Account } from '@models/account.model';

export const accountOwnershipMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const accountId = req.params.id;

  try {
    const account = await Account.findById(accountId);
    if (!account) {
      return res.status(404).json({ message: 'Cuenta no encontrada' });
    }

    if (account.user.toString() !== req.user!.id) {
      return res.status(403).json({ message: 'No tienes permiso para acceder a esta cuenta' });
    }

    (req as any).account = account;

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Error al validar la propiedad de la cuenta' });
  }
};
