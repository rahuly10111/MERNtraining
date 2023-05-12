import { Request, Response } from "express";
import { registrationdetails } from "../../model/registrationInterface";
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class registrationRepository {
    async userNewRegistration(registrationmodel: registrationdetails) {
        console.log("reg error", registrationmodel)
        let responseuser = await prisma.user.create({
            data: {
                name: registrationmodel.name,
                email: registrationmodel.email,
                password: registrationmodel.password
            }


        })
        console.log(responseuser);
        return responseuser;
    }



}

export default new registrationRepository();