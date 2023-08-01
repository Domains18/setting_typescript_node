import express from 'express'

import { deleteUserByID, getUserById, getUsers, userModel } from '../database/users'

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
        return res.json(deletedUser);
    } catch (error) {
        res.sendStatus(500);
        throw new Error(error);
        return;
    }
}


export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { userName } = req.body;
        const { id } = req.params;
        if (!userName) {
            res.sendStatus(400).json("no username was provided");
        }
        const existingUser = await getUserById(id);
        existingUser.username = userName;
        await existingUser.save();
        return res.status(200).json(existingUser).end();
    } catch (error) {
        throw new Error(error)
        return res.sendStatus(500).json("somethiing went wrong")
    }
}