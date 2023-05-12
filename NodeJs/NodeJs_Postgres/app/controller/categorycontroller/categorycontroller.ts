import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { categorydetails } from "../../model/categoryinterface";
import categoryRepositary from '../../repository/index'
import { postdetails } from "../../model/postinterface";

let response = new responseModel;
class categorycontroller {
    async postcategorydetails(req: Request, res: Response) {
        const categorydata: categorydetails = {
            categoryname: req.body.categoryname
        }
        const postdata: postdetails = {
            title: req.body.title,
            userid: (req as any).Uid
        }
        try {
            const categoryresponse = await categoryRepositary.categoryrepository.createcategory(categorydata, postdata);
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

            const Uid = (req as any).Uid

            const categoryresponse = await categoryRepositary.categoryrepository.getcategory(Uid);
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
        const categoryid = parseInt(req.params.id);
        try {
            const categoryresponse = await categoryRepositary.categoryrepository.deletecategory(categoryid);
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
// ---------------------------------------------------------------------------------------------




    async putcategorydetails(req: Request, res: Response) {
        const categoryid = parseInt(req.params.id);

        console.log("running   puuuu")
        try {
            const dataToUpdate: categorydetails = {
                categoryname: req.body.categoryname
            }
            console.log("qewrfge",dataToUpdate.categoryname)
            
            const postdata: postdetails = {
                title: req.body.title,
                userid: (req as any).Uid
            }
            const categoryresponse = await categoryRepositary.categoryrepository.putcategory(dataToUpdate, postdata, categoryid);
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

            const categoryresponse = await categoryRepositary.categoryrepository.sortingSearchCategory(orderByCondition, whereCondition);
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



    async filtercategorydetails(req: Request, res: Response) {
        try {
            const categoryresponse = await categoryRepositary.categoryrepository.filtercategory();
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