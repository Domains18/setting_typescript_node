import express from 'express';
import { isAuthenticated } from '../middlewares';

import { getAllUsers } from '../controllers/users.controller';

export default (router: express.Router) => {
    router.get('/users',isAuthenticated,  getAllUsers);
};
