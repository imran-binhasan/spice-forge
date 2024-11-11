
import express, {Request, Response} from 'express';
import Menus from '../models/menu';

const router = express.Router();
router.get('/',async (req:Request, res:Response) => {
    const result = await Menus.find();
    res.json(result)
});

export default router;