import {Request, Response, NextFunction} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import 'dotenv/config'
import Users from '../models/users'
declare global {
    namespace Express{
        interface Request{
          decoded?: JwtPayload,
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
    req.decoded = decoded;
    next()
  } catch (error) {
    res.status(401).send({ message: 'Forbidden access!' });
  }
   
}

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.decoded) {
      res.status(401).send({ message: 'Unauthorized access!' });
      return;
    }
    const email = req.decoded.email;
    const user = await Users.findOne({email:email})
    const isAdmin = user?.role === 'admin';
    if(!isAdmin){
      res.status(403).send({ message: 'Forbidden access!' });
    }
    next();
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};




export default verifyToken;