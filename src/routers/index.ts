import { Router } from "express";
import userRoutes from "./user";
import { USER_ROUTES } from "@config/routes";

const routes = () => {
    const router = Router();

    router.use(`/${USER_ROUTES.ROOT}`, userRoutes);

    return router;
};

export default routes;
