import { Router } from "express";
import { getUsers } from "@controllers/user";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios (para pruebas)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", getUsers);

export default router;
