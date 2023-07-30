import express from 'express';
import {get, merge} from 'lodash';

import { getUserBySessionToken } from 'database/users';


export const isAuthenticated = async( req: express.Request, res: express.Response) => {
    try {
        //Todo: add cookie
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}