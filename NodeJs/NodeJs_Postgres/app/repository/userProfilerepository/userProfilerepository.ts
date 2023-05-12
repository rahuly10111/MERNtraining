import { Request, Response } from "express";
import { userProfiledetail } from '../../model/userProfileinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class userProfilerepository {
    async createuser(usermodel: userProfiledetail) {
        let responseuser = await prisma.userprofile.create({
            data: {
                petname: usermodel.petname,
                gender: usermodel.gender,
                age: usermodel.age,
                userId: usermodel.userId
            }
        })
        return responseuser;
    }

    async getuser(userId: any) {
        const responseuser = await prisma.userprofile.findMany({
            where: {
                id: userId
            },
            include: {
                user: true,
            }


        });
        return responseuser;
    }

    async deleteuser(userid: any) {
        let responseuser = await prisma.userprofile.delete({
            where: { id: userid },
        })
        return responseuser;
    }

    async putuser(dataToUpdate: any, userid: any) {
        let responseuser = await prisma.userprofile.update({
            where: { id: userid },
            data: dataToUpdate
        })
        return responseuser;
    }

    async sortingSearchuser(orderByCondition?: any, whereCondition?: any) {

        const responseuser = await prisma.userprofile.findMany({
            where: whereCondition,
            orderBy: orderByCondition
        });

        return responseuser
    }


    async filteruser() {
        const responseuser = await prisma.userprofile.findMany({

        });
        return responseuser;
    }



}

export default new userProfilerepository();