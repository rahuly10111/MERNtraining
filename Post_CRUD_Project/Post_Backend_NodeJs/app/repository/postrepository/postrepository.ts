import { postdetails } from '../../model/postinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class postrepository {
    async createpost(postmodel: postdetails) {
        let responsepost = await prisma.posts.create({
            data: {
                title: postmodel.title,
                description: postmodel.description,
                category: postmodel.category
            }
        })
        return responsepost;
    }

    async getpost() {
        let responsepost = await prisma.posts.findMany();
        return responsepost;
    }


    async getpostid(postid: string) {
        let responsepost = await prisma.posts.findMany({
            where: { id: postid },
        })
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


}

export default new postrepository();