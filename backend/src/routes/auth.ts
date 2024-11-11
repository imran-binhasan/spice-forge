import express, {Request, Response} from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/', async(req:Request, res:Response) => {
    const user = req.body;
    const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET as string, {expiresIn:'4h'});
    res.send({token})


})

export default router