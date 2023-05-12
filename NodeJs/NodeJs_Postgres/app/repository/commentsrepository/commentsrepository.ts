import { Request, Response } from "express";
import { commentsdetails } from '../../model/commentsinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class commentsrepository {
    async createcomments(commentsidmodel: commentsdetails) {
        let responsecomments = await prisma.comments.create({
            data: {
                commenttext: commentsidmodel.commenttext,
                postid: commentsidmodel.postid
            }
        })
        return responsecomments;
    }

    async getcomments(userId: any) {
        let responsecomments = await prisma.comments.findMany({
            where: {
                id: userId
            },
            include: {
                commentpost: true
            }
        });
        return responsecomments;
    }

    async deletecomments(commentsid: any) {
        let responsecomments = await prisma.comments.delete({
            where: { id: commentsid },
        })
        return responsecomments;
    }

    async putcomments(dataToUpdate: any, commentsid: any) {
        let responsecomments = await prisma.comments.update({
            where: { id: commentsid },
            data: dataToUpdate
        })
        return responsecomments;
    }

    async sortingSearchComments(orderByCondition: any, whereCondition: any) {
        const responsecomments = await prisma.comments.findMany({
            where: whereCondition,
            orderBy: orderByCondition
        });
        return responsecomments
    }


    async filtercomments() {
        const responsecomments = await prisma.comments.findMany({
            // where: {

            // },
        });
        return responsecomments;
    }






}

export default new commentsrepository();