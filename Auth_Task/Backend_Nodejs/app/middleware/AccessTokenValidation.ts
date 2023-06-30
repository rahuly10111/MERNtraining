import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { responseModel } from "../.././interface";
let response = new responseModel;


function accesstokenverify(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET_ACCESSTOKEN as string, async (err: any, user: any) => {
            if (err) {
                response.status = 400
                response.message = " user Not Found "
                response.data = null
                response.accessToken = null
                res.status(400).json(response);
            }
            else {
                (req as any).Uid = user.userId;
                next();
            }
        });


    } catch (error) {
        response.status = 400
        response.message = error as string
        response.data = null
        response.accessToken = null

    }


}
export default accesstokenverify;