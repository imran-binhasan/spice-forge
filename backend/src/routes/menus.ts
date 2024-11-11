// import express, { Request, Response } from "express";
// import Menu from "../models/menu";

// const router = express.Router();

// router.get('/', async (req: Request, res: Response) => {
//     try {
//       const result = await Menu.find({});
//       console.log('Fetched menu items:', result);
//       res.json(result);
//     } catch (error) {
//       console.error('Error fetching menus:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  

// export default router;

import express, {Request, Response} from 'express';
import Menus from '../models/menu';

const router = express.Router();
router.get('/',async (req:Request, res:Response) => {
    const result = await Menus.find();
    res.json(result)
});

export default router;