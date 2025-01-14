
import express, {Request, Response} from 'express'
import Users from "../models/users";
import verifyToken from '../middleware/auth';

const router = express.Router();
router.post('/', async (req:Request, res:Response) => {
    try {
        const newUser = new Users({
            name:req.body.name,
            email:req.body.email,
            role:req.body.role
        })
        const result = await newUser.save();
        res.status(201).send(result)
    }catch (error){
        res.send({message:'error'})
    }
});

router.get('/',verifyToken, async(req : Request, res:Response) => {
    const result =await Users.find();
    res.send(result)
})

router.delete('/:id', async(req : Request, res:Response) => {
    const result =await Users.findByIdAndDelete({_id: req.params.id})
    res.status(204).send({
        success:true,
        message: 'deleted',
    })
})

router.patch('/:id', async(req : Request, res:Response) => {
   try {
    console.log(req.params.id)
    const result = await Users.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            role: 'admin'
        }
    },{
        new:true
    })
    console.log(result)
    res.status(200).send(result)
   } catch (error) {
    res.send({message:'error'})
   }
})

export default router;