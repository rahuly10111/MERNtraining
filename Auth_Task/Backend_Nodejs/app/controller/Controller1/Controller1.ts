import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { abcmodel } from "../../model/Interface2";
import Repository from '../../repository/index'
import jwt from 'jsonwebtoken'
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

let response = new responseModel;

//! change the class name as per the need
class controller1 {


    abcd(req: Request, res: Response) {
        console.log("first");
        const data = (req as any).user.profile._json;
        console.log("User data", data);
    }

    async regUser(req: Request, res: Response) {
        try {
            let responseuser = await prisma.user.create({
                data: {
                    name: req.body.name,
                    age: req.body.age,
                    email: req.body.email,
                    password: req.body.password,
                }
            });
            response.status = 200
            response.message = " User  data Added success "
            response.data = responseuser

        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async loginUser(req: Request, res: Response) {

        try {

            //// const userDetails={}

            let responseuser = await prisma.user.findFirst({
                where: {
                    email: req.body.email
                }
            });


            if (responseuser) {

                const accessToken = jwt.sign({ userId: responseuser.id }, process.env.JWT_SECRET_ACCESSTOKEN!, { expiresIn: '40s' });

                const refreshToken = jwt.sign({ userId: responseuser.id }, process.env.JWT_SECRET_REFRESHTOKEN!, { expiresIn: '24h' });

                response.status = 200
                response.message = " User  data Added success "
                response.data = responseuser
                response.accessToken = accessToken
                response.refreshToken = refreshToken

            }

        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.accessToken = null
            response.refreshToken = null
        }
        res.send(response);
    }


    async getUserById(req: Request, res: Response) {

        try {
            const Uid = (req as any).Uid;

            let responseuser = await prisma.user.findMany({
                where: {
                    id: Uid
                }
            });

            response.status = 200
            response.message = " User  data Get success "
            response.data = responseuser
            response.accessToken = null
            response.refreshToken = null

        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.accessToken = null
            response.refreshToken = null
        }
        res.send(response);

    }

    async refreshToken(req: Request, res: Response) {
        try {
            const Uid = (req as any).Uid;
            console.log("first", Uid)
            const accessToken = jwt.sign({ userId: Uid }, process.env.JWT_SECRET_ACCESSTOKEN!, { expiresIn: '40s' });

            const refreshToken = jwt.sign({ userId: Uid }, process.env.JWT_SECRET_REFRESHTOKEN!, { expiresIn: '24h' });

            response.accessToken = accessToken
            response.refreshToken = refreshToken

        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.accessToken = null
            response.refreshToken = null
        }
        res.send(response);
    }


}

export default new controller1();