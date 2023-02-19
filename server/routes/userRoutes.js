const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
    res.status(200).json({
        message: 'User created'
    });
});

router.post('/login', (req, res) => {
    res.status(200).json({
        message: 'User logged in'
    });
});

module.exports = router;
