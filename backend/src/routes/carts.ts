import express,{Request, Response} from "express";
import Carts from "../models/carts";

const router = express.Router();
router.get('/',  async(req:Request, res:Response) => {
    const result =await Carts.find({orderEmail:req.query.email});
    res.json(result)
})

router.post('/', async(req:Request, res:Response) => {
    try{
        const newCart = new Carts({
            menuId: req.body.menuId,
            orderEmail: req.body.orderEmail,
            name: req.body.name,
            image: req.body.image,
            category: req.body.image,
            price: req.body.price,
        });
        const result = await newCart.save();
        res.status(201).send({
            success:true,
            message:'succesfully created !',
            data:result
        })
    }catch (error){
        res.status(400).json({message:'error'})
    }
})

export default router;