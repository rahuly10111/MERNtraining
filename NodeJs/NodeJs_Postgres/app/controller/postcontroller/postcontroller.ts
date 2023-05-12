import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { postdetails } from "../../model/postinterface";
import postRepositary from '../../repository/index'
import { categorydetails } from '../../model/categoryinterface';

let response = new responseModel;
class postcontroller {
    async postpostdetails(req: Request, res: Response) {
        try {
            //const Uid = (req as any).Uid
            const postdata: postdetails = {
                title: req.body.title,
                userid: (req as any).Uid
            }
            const categoryData: categorydetails = {
                categoryname: req.body.categoryname
            }


            const postresponse = await postRepositary.postrepository.createpost(postdata, categoryData);
            response.status = 200
            response.message = " Post  data Added success "
            response.data = postresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async getpostdetails(req: Request, res: Response) {
        try {

            const Uid = (req as any).Uid

            const postresponse = await postRepositary.postrepository.getpost(Uid);
            response.status = 200
            response.message = " Post  data Get success "
            response.data = postresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }


    async deletepostdetails(req: Request, res: Response) {
        try {
            const postid = parseInt(req.params.id);
            const postresponse = await postRepositary.postrepository.deletepost(postid);
            response.status = 200
            response.message = " Post  data Deleted success "
            response.data = postresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async putpostdetails(req: Request, res: Response) {
        const postid = parseInt(req.params.id);
        const Uid = (req as any).Uid
        try {
            const dataToUpdate: postdetails = {
                title: req.body.title,
                userid: (req as any).Uid,
            }
            const categoryData: categorydetails = {
                categoryname: req.body.categoryname
            }
            const postresponse = await postRepositary.postrepository.putpost(dataToUpdate, categoryData, postid);
            response.status = 200
            response.message = " Post  data Edited success "
            response.data = postresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }


    async sortingSearchPostDetails(req: Request, res: Response) {
        const sortstring = req.query.sort;
        const searchstring = req.query.search;
        const sortfield = req.query.sortfield as string
        const searchfieldone = req.query.searchfieldone as string
        // const searchfieldtwo = req.query.searchfieldtwo as string

        try {
            let whereCondition = {};
            let orderByCondition = {};
            if (searchstring) {
                whereCondition = {
                    OR: [
                        { [searchfieldone]: { contains: searchstring, mode: "insensitive" } },
                        // { [searchfieldtwo]: { contains: searchstring, mode: "insensitive" } }
                    ]
                };
            }

            if (sortstring) {
                orderByCondition = { [sortfield]: sortstring };
            }
            const postresponse = await postRepositary.postrepository.sortingSearchpost(orderByCondition, whereCondition);
            response.status = 200
            response.message = " Post  data Sorted success "
            response.data = postresponse
        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }


    async filterpostdetails(req: Request, res: Response) {
        try {
            const postresponse = await postRepositary.postrepository.filterpost();
            response.status = 200
            response.message = " Post  data Filter success "
            response.data = postresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }



}

export default new postcontroller();