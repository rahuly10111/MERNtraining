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

            const Uid = (req as any).Uid

            const userresponse = await tokenRepository.tokenRepository.userdetail(Uid);

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

