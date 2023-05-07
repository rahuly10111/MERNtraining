import { Request, Response } from "express";
import { commentsdetails } from '../../model/commentsinterface';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class socialrepository {
    async createcomments(commentsidmodel: commentsdetails) {
        let responsecomments = await prisma.comments.create({
            data: {
                commenttext: commentsidmodel.commenttext,
                postid: commentsidmodel.postid

            }
        })
        return responsecomments;
    }

    async getcomments() {
        let responsecomments = await prisma.comments.findMany({
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

    async sortingcomments(sortOrder: any) {
        
        const responsecomments = await prisma.comments.findMany({
            orderBy: {
                commenttext: sortOrder
            }
        });
        return responsecomments
    }

    async searchcomments(searchstring: string) {
        const responsecomments = await prisma.comments.findMany({
            where: {
                OR: [
                    { commenttext: { contains: searchstring, mode: "insensitive" } },


                ],
            },
        });
        return responsecomments;
    }

    async filtercomments() {
        const responsecomments = await prisma.comments.findMany({
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
        return responsecomments;
    }






}

export default new socialrepository();