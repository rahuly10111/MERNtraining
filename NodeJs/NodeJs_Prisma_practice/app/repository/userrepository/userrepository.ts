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
            include: {
                _count: {
                    select: { post: true },
                },
                post: true
            },
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

    async sortingSearchuser(orderByCondition?: any, whereCondition?: any) {

        const responseuser = await prisma.user.findMany({
            where: whereCondition,
            orderBy: orderByCondition
        });

        return responseuser
    }


    async filteruser() {
        const responseuser = await prisma.user.findMany({

            // take:4      //-->> Pagination of four data

            // skip: 8 //-->> It will Skip eight user data 

            // distinct:["name"]  //-->> not show the same name data every time

            //    where:{
            //     name:{equals:"Shivam"} //-->> by using responseuser.length it will number of user   having name "shivam" 
            //    }


            //-->> Male with age greater than 20
            // where: {
            //     AND: [{
            //         gender: {
            //             startsWith: "male"
            //         },
            //     }, {
            //         age: { gt: 20 }
            //     }],

            // }


            where: {
                AND: [{
                    gender: {
                        startsWith: "male"
                    },
                }, {
                    age: { gt: 20 }
                }],
            },
            include: {
                post: true
            }




            // include: {
            //     post: {
            //         select: {
            //             title:true,
            //             categoryes: true,   //-->> get all data of user and post (title , catergoryes of post and comments on posts)
            //             commentpost: true
            //         }
            //     }
            // }


            // where: {
            //     select:{
            //         post:{
            //             where:{
            //                 title:"lucky Boys"
            //             }
            //         }
            //     }
            // },


            // include: {
            //     post: {
            //         select: {
            //             categoryes: true,
            //             commentpost: true
            //         }
            //     }
            // }

        });
        return responseuser;
    }



}

export default new countryrepository();