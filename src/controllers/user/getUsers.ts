import { Request, Response, NextFunction } from "express";
import { STATUS, USER } from '@config/messages';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {    
    return res.status(STATUS.SUCCESS).json({ message: USER.CREATED });
};

export default getUsers;