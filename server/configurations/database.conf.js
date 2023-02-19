const mongoose = require('mongoose');
const colors = require('colors');


const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log( `Database connection succesful: ${conn.connection.host}`.red.bold)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = { connectDatabase}
