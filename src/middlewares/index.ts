import express from 'express';
import { get, merge } from 'lodash';

import { getUserBySessionToken } from '../database/users';


export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['typescript_auth'];
        if (!sessionToken) {
            return res.sendStatus(401);
        }
        const existingUser = await getUserBySessionToken(sessionToken);
        if (!existingUser) {
            return res.sendStatus(403);
        }
        merge(req, { identity: existingUser });
        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}