import { authentication, generateRandomString } from '../helpers/index';
import { createUser, getUserByEmail, userModel } from './../database/users';
import express from "express";

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, username, password} = req.body;
        if(!email || !username || !password){
            return res.sendStatus(400);
        }
        const avoidDuplicate = await getUserByEmail(email);
        if(avoidDuplicate){
            return res.sendStatus(400);
        }
        //create authentication
        const salt = generateRandomString();
        const user = await createUser({
            email,
            username,
            authentication:{
                salt,
                password: authentication(salt, password)
            }
        });
        return res.sendStatus(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
