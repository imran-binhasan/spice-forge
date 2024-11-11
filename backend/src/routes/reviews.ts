
import express, {Request, Response} from 'express';
import Reviews from '../models/review';

const router = express.Router();
router.get('/', async(req:Request, res:Response) => {
    const result = await Reviews.find();
    res.json(result);
})

export default router;