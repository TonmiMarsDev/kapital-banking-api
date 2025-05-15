import { Router } from "express";
import { 
    createAccount, 
    getAccounts,
    updateAccount,
    deleteAccount,  
} from "@controllers/account";
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

router.post("/", authMiddleware, createAccount);
router.get('/', authMiddleware, getAccounts);
router.put('/:id', authMiddleware, updateAccount);
router.delete('/:id', authMiddleware, deleteAccount);

export default router;