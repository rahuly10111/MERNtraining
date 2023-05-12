import { Request, Response } from "express";
import { postdetails } from '../../model/postinterface';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class socialrepository {
    async createpost(postmodel: postdetails) {
        let responsepost = await prisma.posts.create({
            data: {
                title: postmodel.title,
                userid: postmodel.userid,
                categoryid: postmodel.categoryid

            }
        })
        return responsepost;
    }

    async getpost() {
        let responsepost = await prisma.posts.findMany({
            include: {
                user: true,
                categoryes: true,
                commentpost: true
            }

            // include: {
            //     _count: {
            //         select: { commentpost: true },
            //     },
            // },


            // include: {
            //     user: true

            // }
        });
        return responsepost;
    }

    async deletepost(postid: any) {
        let responsepost = await prisma.posts.delete({
            where: { id: postid },
        })
        return responsepost;
    }

    async putpost(dataToUpdate: any, postid: any) {
        let responsepost = await prisma.posts.update({
            where: { id: postid },
            data: dataToUpdate
        })
        return responsepost;
    }

    async sortingSearchpost(orderByCondition: any, whereCondition: any) {
        const responsepost = await prisma.user.findMany({
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

export default new socialrepository();