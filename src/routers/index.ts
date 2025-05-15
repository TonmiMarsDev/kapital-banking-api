import { Router } from "express";
import { USER_ROUTES } from "@config/routes";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import accountRoutes from "./account.routes";
import transactionRoutes from "./transaction.routes";


const routes = () => {
    const router = Router();

    router.use(`/${USER_ROUTES.ROOT}`, userRoutes);
    router.use(`/auth`, authRoutes);
    router.use(`/accounts`, accountRoutes);
    router.use(`/transactions`, transactionRoutes);

    return router;
};

export default routes;
