const User = require('../models/user/userSchema');
const expressAsyncHandler = require('express-async-handler');




const registerUser = expressAsyncHandler(async (req, res) => {
    const { names, email, password } = req.body;
    if (!names, !email, !password) {
        res.status(400)
        throw new Error('All fields are required');
    }

    //check if user exists
    const checkUser = await User.findOne({ email });

    if (checkUser) {
        res.status(400);
        throw new Error('user already exists');

    }
    
    //create user
    const newUser = await User.create({
        names,
        email,
        password
    });

    if (newUser) {
        res.status(201);
        res.json({
            _id: newUser.id,
            names: newUser.name,
            email: newUser.email
        });
    }
});

module.exports={ registerUser}
