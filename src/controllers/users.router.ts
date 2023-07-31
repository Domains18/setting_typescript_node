import express from 'express'

import { getUsers } from 'database/users'

export const getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const user = await getUsers();
        return res.status(200).json(user);
    } catch (error) {
        throw new Error(error);
        return res.sendStatus(500);
    }
}