import express from 'express';
import { get, merge } from 'lodash';

import { getUserBySessionToken } from '../database/users';


export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try {
        const { id } = req.params;
        const currentUserId = get(req, `identity._id`) as string;
        if (!currentUserId) {
            return res.sendStatus(401);
        }
        if (currentUserId.toString() !== id) {
            return res.sendStatus(403)
        }
        next()
    } catch (error) {
        res.status(500);
        throw new Error(error);
        return;
    }
}

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