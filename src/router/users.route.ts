import express from 'express';
import { isAuthenticated, isOwner } from '../middlewares';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users.controller';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser)
};
