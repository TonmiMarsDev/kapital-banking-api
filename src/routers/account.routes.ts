import { Router } from "express";
import { createAccount  } from "@controllers/account";
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

router.post("/", authMiddleware, createAccount);

export default router;