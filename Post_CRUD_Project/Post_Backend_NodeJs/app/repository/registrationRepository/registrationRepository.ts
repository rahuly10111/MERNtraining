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
                password: registrationmodel.password,
                mobile: registrationmodel.mobile,
                address: registrationmodel.address,
                pincode: registrationmodel.pincode,
                roleID: registrationmodel.roleID
            }


        })
        console.log(responseuser);
        return responseuser;
    }


    async getAllUser() {
        let responseuser = await prisma.user.findMany();
        return responseuser;
    }


    async getUserid(userid: string) {
        let responseuser = await prisma.user.findMany({
            where: { id: userid },
        })
        return responseuser;
    }


    async getUserByid(userid: string) {
        let responseuser = await prisma.user.findMany({
            where: { id: userid },
        })
        return responseuser;
    }

    async deleteUser(postid: any) {
        let responseuser = await prisma.user.delete({
            where: { id: postid },
        })
        return responseuser;
    }

    async putUser(registrationmodel: registrationdetails, postid: any) {
        let responseuser = await prisma.user.update({
            where: { id: postid },
            data: {
                name: registrationmodel.name,
                email: registrationmodel.email,
                password: registrationmodel.password,
                mobile: registrationmodel.mobile,
                address: registrationmodel.address,
                pincode: registrationmodel.pincode
            }
        })
        return responseuser;
    }


}

export default new registrationRepository();