import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import menuCollection from './routes/menus'


mongoose.connect(process.env.CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use('/api/menus', menuCollection)

app.listen(8100, ()=> {
    console.log(`server is runnning`)
})