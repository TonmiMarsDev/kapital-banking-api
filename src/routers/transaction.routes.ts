import { Router } from 'express';
import { deposit, withdraw } from '@controllers/transaction';
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

router.post('/deposit', authMiddleware, deposit);
router.post('/withdraw', authMiddleware, withdraw);

export default router;
