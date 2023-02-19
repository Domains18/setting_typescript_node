const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const connectDatabase = require('./configurations/database.conf')


const app = express();
// connectDatabase()

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// console.log(process.env.MONGO_URI)

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`.yellow.bold));
