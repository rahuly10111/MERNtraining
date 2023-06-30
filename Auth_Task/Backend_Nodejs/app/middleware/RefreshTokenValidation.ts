import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { responseModel } from "../.././interface";
let response = new responseModel;


function refreshtokenverify(req: Request, res: Response, next: NextFunction) {
    const authHeader = (req.body.token).toString();
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {

        jwt.verify(authHeader, process.env.JWT_SECRET_REFRESHTOKEN as string, async (err: any, user: any) => {
            if (err) {
                console.log("error", err)
                response.status = 400
                response.message = " Token Got With Error Not Found "
                response.data = null
                response.refreshToken = null
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
        response.refreshToken = null
    }

}
export default refreshtokenverify;