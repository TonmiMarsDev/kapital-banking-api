import { Router } from "express";
import { 
    createAccount, 
    getAccounts,
    updateAccount,
    deleteAccount,  
} from "@controllers/account";
import { authMiddleware } from '@middlewares/auth.middleware';
import { accountOwnershipMiddleware } from '@middlewares/ownership.middleware';

const router = Router();

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Crea una nueva cuenta bancaria
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cuenta creada exitosamente
 */
router.post("/", authMiddleware, createAccount);

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Obtiene las cuentas del usuario autenticado
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cuentas
 */
router.get("/", authMiddleware, getAccounts);

/**
 * @swagger
 * /accounts/{id}:
 *   put:
 *     summary: Actualiza una cuenta existente
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cuenta actualizada
 */
router.put("/:id", authMiddleware, accountOwnershipMiddleware, updateAccount);

/**
 * @swagger
 * /accounts/{id}:
 *   delete:
 *     summary: Elimina una cuenta existente
 *     tags: [Accounts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Cuenta eliminada
 */
router.delete("/:id", authMiddleware, accountOwnershipMiddleware, deleteAccount);

export default router;