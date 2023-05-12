import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { registrationdetails } from "../../model/registrationInterface";
import registrationRepositary from '../../repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, PrismaClient } from '@prisma/client';
import registrationRepository from "../../repository/registrationRepository/registrationRepository";
const prisma = new PrismaClient();


let response = new responseModel;
class registrationcontroller {
    async postUserRegistrstionDetails(req: Request, res: Response) {
        try {
            const registrationData: registrationdetails = {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: req.body.password
            }
            const hashedPassword = await bcrypt.hash(registrationData.password, 10);
            registrationData.password = hashedPassword

            const token = jwt.sign({ userId: registrationData.id }, process.env.JWT_SECRET!, {
                expiresIn: '1h',
            });

            const postresponse = await registrationRepository.userNewRegistration(registrationData);
            response.status = 200
            response.message = " Post  data Added success "
            response.data = postresponse
            response.token = token
        } catch (error) {
            console.log("resqw",error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }




}

export default new registrationcontroller();