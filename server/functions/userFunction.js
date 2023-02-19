const User = require('../models/user/userSchema');

const registerUser = expressAsyncHandler(async (req, res) => {
    const { names, email, password } = req.body;
    const Users = [];

    if (!names || !email || !password) {
        res.status(400).json({ message: 'All fields are required' });
    }
    try {
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
