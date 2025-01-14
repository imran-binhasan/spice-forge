import {Request, Response, NextFunction} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import 'dotenv/config'
declare global {
    namespace Express{
        interface Request{
            email?:string
        }
    }
}

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    const token = (req.headers.authorization?.split(' ')[1])
    if(!token){
        res.status(401).send({message:'forbidden access !'})
        return
    }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload
    req.body.email = decoded.email;
    next()
  } catch (error) {
    res.status(401).send({ message: 'Forbidden access!' });
  }
   
}

export default verifyToken;