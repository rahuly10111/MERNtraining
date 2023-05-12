import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import tokenRepository from '../../repository/index'
import { Prisma, PrismaClient } from '@prisma/client';
import jwt_decode from "jwt-decode";

const prisma = new PrismaClient();

let response = new responseModel;
class tokencontroller {
    async tokengetdata(req: Request, res: Response) {
        try {
            // const authHeader = req.headers.authorization;
            // const token = authHeader && authHeader.split(' ')[1];

            const Uid = (req as any).Uid
            console.log((req as any).Uid)

            // // console.log("token", token)
            // var decoded = jwt_decode(token as string);
            // // console.log("Decoded", decoded)
            // var userId = (decoded as any).userId;
            // console.log(userId)
            const userresponse = await tokenRepository.tokenRepository.userdetail(Uid);
            //  console.log(userresponse)
            response.status = 200
            response.message = " User Has Logined successfully "
            response.data = userresponse
        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response)

    }
}

export default new tokencontroller;

