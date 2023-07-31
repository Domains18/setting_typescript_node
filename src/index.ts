import express from 'express'
import http from 'http'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose';
import router from './router/router';
dotenv.config();

const app = express();
app.use(cookieParser());

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const server = http.createServer(app);

mongoose.Promise = Promise;
mongoose.connect(process.env.mongo_db);
mongoose.connection.on('error', (error: Error) => console.log(error));


app.use('/', router())

server.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})