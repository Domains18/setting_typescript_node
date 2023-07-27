import express from 'express'
import http from 'http'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose';
dotenv.config();
const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

mongoose.Promise = Promise;
mongoose.connect(process.env.mongo_db);
mongoose.connection.on('error', (error: Error)=> console.log(error));


server.listen(process.env.PORT, () =>{
    console.log(`server running on port ${process.env.PORT}`);
})