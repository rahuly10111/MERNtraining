import { categorydetails } from '../../model/categoryinterface';
import { Prisma, PrismaClient } from '@prisma/client';
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

    async putcategory( categoryid: any, dataToUpdate : any) {
        let responsecategory = await prisma.category.update({
            where: { id: categoryid },
            data: dataToUpdate
                
            
        })
        return responsecategory;
    }

    async sortingcategory(sortOrder: any) {
        
        const responsecategory = await prisma.category.findMany({
            orderBy: {
                categoryname: sortOrder
            }
        });
        return responsecategory
    }

    async searchcategory(searchstring: string) {
        const responsecategory = await prisma.category.findMany({
            where: {
                OR: [
                    { categoryname: { contains: searchstring, mode: "insensitive" } },


                ],
            },
        });
        return responsecategory;
    }

    async filtercategory() {
        const responsecategory = await prisma.category.findMany({
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
        return responsecategory;
    }






}

export default new socialrepository();