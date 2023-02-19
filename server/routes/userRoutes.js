const express = require('express');
const router = express.Router();
const expressAsyncHandler = require('express-async-handler');
const { registerUser } = require('../functions/userFunction');

router.post('/signup', registerUser);

router.post('/login', (req, res) => {
    res.status(200).json({
        message: 'User logged in'
    });
});

module.exports = router;
