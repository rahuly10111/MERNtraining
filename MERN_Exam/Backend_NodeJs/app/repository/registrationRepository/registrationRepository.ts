import { Request, Response } from "express";
import { registrationdetails } from "../../model/registrationInterface";
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class registrationRepository {
    async userNewRegistration(registrationmodel: registrationdetails) {
        let responseuser = await prisma.user.create({
            data: {
                name: registrationmodel.name,
                email: registrationmodel.email,
                password: registrationmodel.password,
                mobile: registrationmodel.mobile,
            }
        })
        return responseuser;
    }



    async getUserid(userid: string) {
        let responseuser = await prisma.user.findMany({
            where: { id: userid },
        })
        return responseuser;
    }

    async editUser(registrationmodel: registrationdetails, postid: any) {
        let responseuser = await prisma.user.update({
            where: { id: postid },
            data: {
                name: registrationmodel.name,
                email: registrationmodel.email,
                password: registrationmodel.password,
                mobile: registrationmodel.mobile,
            }
        })
        return responseuser;
    }


    async getUserByid(userid: string) {
        let responseuser = await prisma.user.findMany({
            where: { id: userid },
        })
        return responseuser;
    }


}

export default new registrationRepository();