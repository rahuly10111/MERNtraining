import { Request, Response } from "express";
import { userdetail } from '../../model/userinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class countryrepository {
    async createuser(usermodel: userdetail) {
        let responseuser = await prisma.user.create({
            data: {
                name: usermodel.name
            }
        })
        return responseuser;
    }

    async getuser() {
        const responseuser = await prisma.user.findMany({
            // select:{
            //     name:true
            // }
            include: {
                post: true

            }
            // include: {
            //     post:{
            //         where:{
            //             title:"bozs"
            //         }
            //     }
            //  }

            // include: {
            //     _count: {
            //         select: { post: true },
            //     },
            // },

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


}

export default new countryrepository();