import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { commentsdetails } from "../../model/commentsinterface";
import commentsRepositary from '../../repository/index'

let response = new responseModel;
class commentscontroller {
    async postcommentsdetails(req: Request, res: Response) {
        const commentsdata: commentsdetails = {
            commenttext: req.body.commenttext,
            postid: req.body.postid
        }

        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.createcomments(commentsdata);
            response.status = 200
            response.message = " Comments  data Added success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async getcommentsdetails(req: Request, res: Response) {

        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.getcomments();
            response.status = 200
            response.message = " Comments  data Get success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async deletecommentsdetails(req: Request, res: Response) {
        const commentsid = req.params.id;

        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.deletecomments(commentsid);
            response.status = 200
            response.message = " Comments  data Deleted success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async putcommentsdetails(req: Request, res: Response) {
        const commentsid = req.params.id;

        try {
            const dataToUpdate: commentsdetails = {
                commenttext: req.body.commenttext,
                postid: req.body.postid
            }
            const commentsresponse = await commentsRepositary.commentsRepositary.putcomments(dataToUpdate, commentsid);
            response.status = 200
            response.message = " Comments  data Edited success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async sortingSearchCommentsdetails(req: Request, res: Response) {
        const sortstring = req.query.sort;
        const searchstring = req.query.search
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
            const commentsresponse = await commentsRepositary.commentsRepositary.sortingSearchComments(orderByCondition, whereCondition);
            response.status = 200
            response.message = " Comments  data Sorted success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    // async searchcommentsdetails(req: Request, res: Response) {
    //     const searchstring = req.params.search;
    //     try {
    //         const commentsresponse = await commentsRepositary.commentsRepositary.searchcomments(searchstring);
    //         response.status = 200
    //         response.message = " Comments  data get success ,as per Search"
    //         response.data = commentsresponse

    //     } catch (error) {
    //         console.log(error);
    //         response.status = 400
    //         response.message = error as string
    //         response.data = null
    //     }
    //     res.send(response);



    // }

    async filtercommentsdetails(req: Request, res: Response) {
        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.filtercomments();
            response.status = 200
            response.message = " Comments  data Filter success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);

    }



}

export default new commentscontroller();