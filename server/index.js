const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`.yellow.bold));
