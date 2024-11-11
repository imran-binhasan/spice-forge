import express,{Request, Response, NextFunction} from 'express'
import jwt, {JwtPayload} from 'jsonwebtoken'
import 'dotenv/config'

declare global{
    namespace Express{
        interface Request{
            email?:string
        }
    }
}

const verifyAdmin = (req:Request, res:Response, next:NextFunction) => {
    const email: req.decoded.email;
    console.log(email);
    next()
}

export default verifyAdmin