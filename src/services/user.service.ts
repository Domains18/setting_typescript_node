import { authentication, generateRandomString } from '../helpers/index';
import { createUser, getUserByEmail } from '../database/users';
import express from "express";



export const register = async (req: express.Request, res: express.Response) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        res.status(400);
        res.json("invalid input")
    }
    try {

        const avoidDuplicate = await getUserByEmail(email);
        if (avoidDuplicate) {
            res.status(400);
            res.json("duplicate detected")
        }
        //create authentication
        const salt = generateRandomString();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        });
        res.status(200);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
