import express from 'express'

import { deleteUserByID, getUsers } from '../database/users'

export const getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    } catch (error) {
        throw new Error(error);
        return res.sendStatus(500);
    }
}


export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserByID(id);
    } catch (error) {
        res.sendStatus(500);
        throw new Error(error);
        return;
    }
}