import { Router } from 'express';
import { 
    deposit, 
    withdraw,
    getBalance,
    getTransactionHistory,
 } from '@controllers/transaction';
import { authMiddleware } from '@middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * /transactions/deposit:
 *   post:
 *     summary: Realiza un depósito en una cuenta
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [accountId, amount]
 *             properties:
 *               accountId:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Depósito realizado con éxito
 */
router.post("/deposit", authMiddleware, deposit);

/**
 * @swagger
 * /transactions/withdraw:
 *   post:
 *     summary: Realiza un retiro de una cuenta
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [accountId, amount]
 *             properties:
 *               accountId:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Retiro realizado con éxito
 */
router.post("/withdraw", authMiddleware, withdraw);

/**
 * @swagger
 * /transactions/balance/{id}:
 *   get:
 *     summary: Obtiene el saldo actual de una cuenta
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Saldo actual de la cuenta
 */
router.get("/balance/:id", authMiddleware, getBalance);

/**
 * @swagger
 * /transactions/history/{id}:
 *   get:
 *     summary: Obtiene el historial de transacciones de una cuenta
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Historial de transacciones
 */
router.get("/history/:id", authMiddleware, getTransactionHistory);

export default router;
