import { Request, Response } from "express";
import { postdetails } from '../../model/postinterface';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class socialrepository {
    async createpost(postmodel: postdetails) {
        let responscountry = await prisma.posts.create({
            data: {
                title: postmodel.title,
                userid:postmodel.userid

            }
        })
        return responscountry;
    }

    async getpost() {
        let responscountry = await prisma.posts.findMany({
            include: {
                user: true

            }
        });
        return responscountry;
    }




}

export default new socialrepository();