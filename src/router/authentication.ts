import express from 'express';
import { register } from '../services/user.service';


export default( router: express.Router) => {
    router.post('/auth/register', register);
}