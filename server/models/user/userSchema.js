const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    names: {
        type: String,
        required: [true, 'Names are required'],
    },
    email: {
        type: String,
        required: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
});


const User = mongoose.model('User', userSchema);
