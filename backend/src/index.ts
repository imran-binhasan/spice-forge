import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import menuCollection from './routes/menus'
import reviewCollection from './routes/reviews'
import cartCollection from './routes/carts'
import userCollection from './routes/users'
import authRoutes from './routes/auth'
mongoose.connect(process.env.CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use('/api/auth', authRoutes)
app.use('/api/menus', menuCollection);
app.use('/api/reviews', reviewCollection);
app.use('/api/carts', cartCollection)
app.use('/api/users', userCollection)

app.listen(8100, ()=> {
    console.log(`server is runnning`)
})