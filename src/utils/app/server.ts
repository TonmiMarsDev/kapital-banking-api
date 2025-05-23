import express, { Request, Response, NextFunction } from "express";
import routes from "@routers/index";
import dotenv from 'dotenv';
import { ERROR } from '../../config/messages';
import { setupSwagger } from '@config/swagger';

dotenv.config();

function createServer() {    
    const app = express();

    app.use(express.json({ limit: "2mb" }));
    app.use("/api", routes());
    setupSwagger(app);


    app.get("*", (_req: Request, _res: Response, next: NextFunction) => {
        const error = new Error(ERROR.NOT_FOUND);
        next(error);
    });

    return app;
}

export default createServer;
