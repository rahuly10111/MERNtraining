import { Request, Response } from "express";
import { userdetail } from '../../model/userinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class countryrepository {
    async createuser(usermodel: userdetail) {
        let responseuser = await prisma.user.create({
            data: {
                name: usermodel.name,
                gender: usermodel.gender,
                age: usermodel.age
            }
        })
        return responseuser;
    }

    async getuser() {
        const responseuser = await prisma.user.findMany({
            // select:{
            //     name:true
            // }
            // include: {
            //     post: true

            // }
            // include: {
            //     post:{
            //         where:{
            //             title:"bozs"
            //         }
            //     }
            //  }

            include: {
                _count: {
                    select: { post: true },
                },
            },

            // select: {
            //     post: {
            //         where: {
            //             title: "bozs"
            //         }
            //     }
            // }
            // where:{
            //     name:"Alok"
            // }
            // select:{
            //     post:{
            //         where:{
            //             title:"lucky Boys"
            //         }
            //     }
            // }
            // select:{
            //     post:{
            //        where:{

            //        }
            //     }
            // }


        });
        return responseuser;
    }

    async deleteuser(userid: any) {
        let responseuser = await prisma.user.delete({
            where: { id: userid },
        })
        return responseuser;
    }

    async putuser(dataToUpdate: any, userid: any) {
        let responseuser = await prisma.user.update({
            where: { id: userid },
            data: dataToUpdate
        })
        return responseuser;
    }

    async sortinguser(sortOrder: any,) {
        const responseuser = await prisma.user.findMany({
            orderBy: {
                name: sortOrder
            }
        });
        return responseuser
    }

    async searchuser(searchstring: string) {
        const responseuser = await prisma.user.findMany({
            where: {
                OR: [
                    { name: { contains: searchstring, mode: "insensitive" } },
                    { gender: { contains: searchstring, mode: "insensitive" } },
                ],
            },
        });
        return responseuser;
    }

    async filteruser() {
        const responseuser = await prisma.user.findMany({
            where: {
                // OR: [
                //     { population: { gt: 100000000 } },
                //     { economy: { gte: 4534 } }
                //   ]
                // AND: [
                //     { population: { gt: 100000000 } },
                //     { economy: { gte: 2 } }
                // ]
            },
        });
        return responseuser;
    }



}

export default new countryrepository();