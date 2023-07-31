import { authentication, generateRandomString } from '../helpers/index';
import { createUser, getUserByEmail } from '../database/users';
import express from "express";

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "no data input received" });
            return;
        }
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
        if (!user) {
            res.sendStatus(404);
            return;
        }
        const expectedHash = authentication(user.authentication.salt, password);
        if (user.authentication.password !== expectedHash) {
            res.sendStatus(403);
            return;
        }
        const salt = generateRandomString();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        await user.save();
        // Set cookies
        res.cookie('react_sucks', user.authentication.sessionToken, { domain: 'localhost', path: '/' });
        res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export const register = async (req: express.Request, res: express.Response) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        res.status(400).json({ message: "invalid input" });
        return;
    }

    try {
        const avoidDuplicate = await getUserByEmail(email);
        if (avoidDuplicate) {
            res.status(409).json({ message: "duplicate detected" });
            return;
        }

        // Create authentication
        const salt = generateRandomString();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        });

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};
