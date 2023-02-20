const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/user/userSchema');
const expressAsyncHandler = require('express-async-handler');

const registerUser = expressAsyncHandler(async (req, res) => {
    const { names, email, password } = req.body;

    if (!names || !email || !password) {
        res.status(400);
        throw new Error('Please provide all fields');
    }

    const validateUser = await User.findOne({ email });

    if (validateUser) {
        res.status(400);
        throw new Error('User already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        names: user.names,
        email: user.email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            names: user.names,
            email: user.email,
            token: generateToken(user._id),
        });

    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            names: user.names,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

const aboutUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        names: req.user.names,
        email: req.user.email,
    });
});


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}


module.exports = {
    registerUser,
    loginUser,
    aboutUser,
};
