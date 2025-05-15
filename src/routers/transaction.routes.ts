import { Router } from 'express';
import { 
    deposit, 
    withdraw,
    getBalance,
    getTransactionHistory,
 } from '@controllers/transaction';
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

router.post('/deposit', authMiddleware, deposit);
router.post('/withdraw', authMiddleware, withdraw);
router.get('/balance/:id', authMiddleware, getBalance);
router.get('/history/:id', authMiddleware, getTransactionHistory);

export default router;
