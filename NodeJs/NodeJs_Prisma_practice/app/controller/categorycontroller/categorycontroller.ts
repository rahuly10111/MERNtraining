import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { categorydetails } from "../../model/categoryinterface";
import categoryRepositary from '../../repository/index'

let response = new responseModel;
class categorycontroller {
    async postcategorydetails(req: Request, res: Response) {
        const categorydata: categorydetails = {
            categoryname: req.body.categoryname,
            postid: req.body.postid
        }
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.createcategory(categorydata);
            response.status = 200
            response.message = " Category  data Added success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async getcategorydetails(req: Request, res: Response) {
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.getcategory();
            response.status = 200
            response.message = " Category  data Get success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async deletecategorydetails(req: Request, res: Response) {
        const categoryid = req.params.id;
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.deletecategory(categoryid);
            response.status = 200
            response.message = " Category  data Deleted success "
            response.data = categoryresponse
        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async putcategorydetails(req: Request, res: Response) {
        const categoryid = req.params.id;

        try {
            const dataToUpdate: categorydetails = {
                categoryname: req.body.categoryname,
                postid: req.body.postid
            }
            const categoryresponse = await categoryRepositary.categoryRepositary.putcategory(dataToUpdate, categoryid);
            response.status = 200
            response.message = " Category  data Edited success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async sortingSearchCategoryDetails(req: Request, res: Response) {
        const sortstring = req.query.sort;
        const searchstring = req.query.search;
        const sortfield = req.query.sortfield as string
        const searchfieldone = req.query.searchfieldone as string
        const searchfieldtwo = req.query.searchfieldtwo as string

        try {
            let whereCondition = {};
            let orderByCondition = {};

            if (searchstring) {
                whereCondition = {
                    OR: [
                        { [searchfieldone]: { contains: searchstring, mode: "insensitive" } },
                        { [searchfieldtwo]: { contains: searchstring, mode: "insensitive" } }
                    ]
                };
            }

            if (sortstring) {
                orderByCondition = { [sortfield]: sortstring };
            }

            const categoryresponse = await categoryRepositary.categoryRepositary.sortingSearchCategory(orderByCondition, whereCondition);
            response.status = 200
            response.message = " Category  data Sorted success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    // async searchcategorydetails(req: Request, res: Response) {
    //     const searchstring = req.params.search;
    //     try {
    //         const categoryresponse = await categoryRepositary.categoryRepositary.searchcategory(searchstring);
    //         response.status = 200
    //         response.message = " Category  data get success, as per Search "
    //         response.data = categoryresponse

    //     } catch (error) {
    //         console.log(error);
    //         response.status = 400
    //         response.message = error as string
    //         response.data = null
    //     }
    //     res.send(response);



    // }

    async filtercategorydetails(req: Request, res: Response) {
        try {
            const categoryresponse = await categoryRepositary.categoryRepositary.filtercategory();
            response.status = 200
            response.message = " Category  data Filter success "
            response.data = categoryresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }



}

export default new categorycontroller();