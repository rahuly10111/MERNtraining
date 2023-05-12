import { categorydetails } from '../../model/categoryinterface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class socialrepository {
    async createcategory(categorymodel: categorydetails) {
        let responsecategory = await prisma.category.create({
            data: {
                categoryname: categorymodel.categoryname,
                postid: categorymodel.postid
            }
        })
        return responsecategory;
    }

    async getcategory() {
        let responsecategory = await prisma.category.findMany({
            include: {
                post: true
            }
        });
        return responsecategory;
    }

    async deletecategory(categoryid: any) {
        let responsecategory = await prisma.category.delete({
            where: { id: categoryid },
        })
        return responsecategory;
    }

    async putcategory(categoryid: any, dataToUpdate: any) {
        let responsecategory = await prisma.category.update({
            where: { id: categoryid },
            data: dataToUpdate
        })
        return responsecategory;
    }

    async sortingSearchCategory(orderByCondition: any, whereCondition: any) {

        const responsecategory = await prisma.user.findMany({
            where: whereCondition,
            orderBy: orderByCondition
        });
        return responsecategory
    }


    async filtercategory() {
        const responsecategory = await prisma.category.findMany({
            where: {
            },
        });
        return responsecategory;
    }






}

export default new socialrepository();