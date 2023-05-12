import { categorydetails } from '../../model/categoryinterface';
import { postdetails } from "../../model/postinterface";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class categoryrepository {
    async createcategory(categorymodel: categorydetails, postmodel: postdetails) {
        let responsecategory = await prisma.category.create({
            data: {
                categoryname: categorymodel.categoryname,
                post: {
                    create:
                        [
                            {
                                title: postmodel.title,
                                userid: postmodel.userid
                            },
                            // {
                            //     title: postmodel.title,
                            //     userid: postmodel.userid
                            // },
                            // {
                            //     title: postmodel.title,
                            //     userid: postmodel.userid
                            // },
                            // {
                            //     title: postmodel.title,
                            //     userid: postmodel.userid
                            // }
                        ]

                }
            }
        })
        return responsecategory;
    }

    async getcategory(userId: any) {
        let responsecategory = await prisma.category.findMany({
            where: {
                id: userId
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

    async putcategory(categorymodel: categorydetails, postmodel: postdetails, categoryid: number) {
        let responsecategory = await prisma.category.update({
            where: { id: categoryid },
            data: {
                categoryname: categorymodel.categoryname,
                post: {
                    create:
                        [
                            {
                                title: postmodel.title,
                                userid: postmodel.userid
                            },
                        ]

                }
            }
        })
        return responsecategory;
    }

    async sortingSearchCategory(orderByCondition: any, whereCondition: any) {

        const responsecategory = await prisma.category.findMany({
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

export default new categoryrepository();