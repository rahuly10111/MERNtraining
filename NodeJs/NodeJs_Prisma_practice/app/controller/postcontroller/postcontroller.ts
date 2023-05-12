import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { postdetails } from "../../model/postinterface";
import postRepositary from '../../repository/index'

let response = new responseModel;
class postcontroller {
    async postpostdetails(req: Request, res: Response) {
        const postdata: postdetails = {
            title: req.body.title,
            userid: req.body.userid,
            categoryid: req.body.categoryid
        }

        try {
            const postresponse = await postRepositary.postRepositary.createpost(postdata);
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
            const postresponse = await postRepositary.postRepositary.getpost();
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
        const postid = req.params.id;

        try {
            const postresponse = await postRepositary.postRepositary.deletepost(postid);
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
        const postid = req.params.id;

        try {
            const dataToUpdate: postdetails = {
                title: req.body.title,
                userid: req.body.userid,
                categoryid: req.body.categoryid
            }
            const postresponse = await postRepositary.postRepositary.putpost(dataToUpdate, postid);
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
            const postresponse = await postRepositary.postRepositary.sortingSearchpost(orderByCondition, whereCondition);
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

    // async searchpostdetails(req: Request, res: Response) {
    //     const searchstring = req.params.search;
    //     try {
    //         const postresponse = await postRepositary.postRepositary.searchpost(searchstring);
    //         response.status = 200
    //         response.message = " Post  data get success,As per search "
    //         response.data = postresponse

    //     } catch (error) {
    //         console.log(error);
    //         response.status = 400
    //         response.message = error as string
    //         response.data = null
    //     }
    //     res.send(response);



    // }

    async filterpostdetails(req: Request, res: Response) {
        try {
            const postresponse = await postRepositary.postRepositary.filterpost();
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