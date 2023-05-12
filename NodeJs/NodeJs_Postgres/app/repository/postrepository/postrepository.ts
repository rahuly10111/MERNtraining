import { Request, Response } from "express";
import { postdetails } from '../../model/postinterface';
import { categorydetails } from '../../model/categoryinterface';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class postrepository {
    async createpost(postmodel: postdetails, categoryModal: categorydetails) {
        let responsepost = await prisma.posts.create({
            data: {
                title: postmodel.title,
                userid: postmodel.userid,
                category: {
                    create: [
                        { categoryname: categoryModal.categoryname },
                        // { categoryname: categoryModal.categoryname },
                        // { categoryname: categoryModal.categoryname },
                        // { categoryname: categoryModal.categoryname }
                    ]

                }
            }


        })
        return responsepost;
    }

    async getpost(userId: any) {
        let responsepost = await prisma.posts.findMany({
            where: {
                id: userId
            },
            include: {
                user: true,
                commentpost: true
            }
        });
        return responsepost;
    }


    async deletepost(postid: number) {
        let responsepost = await prisma.posts.delete({
            where: { id: postid },
        })
        return responsepost;
    }



    async putpost(postmodel: postdetails, categoryModal: categorydetails, postid: any) {
        console.log("gwdjsgcdjdfjdewpopred" ,  categoryModal.categoryname)
        let responsepost = await prisma.posts.update({
            where: { id: postid },
            data: {
                title: postmodel.title,
                userid: postmodel.userid,
                category: {
                    create: [
                       {
                        categoryname: categoryModal.categoryname
                       }
                    ]
                }
            }
        });
        return responsepost;
    }

    async sortingSearchpost(orderByCondition: any, whereCondition: any) {
        const responsepost = await prisma.posts.findMany({
            where: whereCondition,
            orderBy: orderByCondition
        });
        return responsepost
    }

    async filterpost() {
        const responsepost = await prisma.posts.findMany({
            // include: {
            //     user: true

            // }
            //where: {

            //  },
        });
        return responsepost;
    }






}

export default new postrepository();