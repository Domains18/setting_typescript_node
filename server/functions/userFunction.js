const User = require('../models/user/userSchema');
const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// @desc    Register a new user
// @route   POST /api/users/signup
// @access  Public
const registerUser = expressAsyncHandler(async (req, res) => {
    const { names, email, password } = req.body;

    if(!names || !email || !password) {
        res.status(400);
        throw new Error('Please fill in all fields');
    }

    const validateUser = await User.findOne({ email });

    if(validateUser) {
        res.status(400);
        throw new Error('User already exists');
    }

    //create user
    const user = await User.create({
        names,
        email,
        password
    });

    if (user) {
        res.status(201);
        res.json({
            _id: user.id,
            names: user.names,
            email: user.email,
            //token
        });
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }
});



module.exports = {
    registerUser
}
