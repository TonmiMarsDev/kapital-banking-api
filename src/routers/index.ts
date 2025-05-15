import { Router } from "express";
import { USER_ROUTES } from "@config/routes";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";


const routes = () => {
    const router = Router();

    router.use(`/${USER_ROUTES.ROOT}`, userRoutes);
    router.use(`/auth`, authRoutes);

    return router;
};

export default routes;
