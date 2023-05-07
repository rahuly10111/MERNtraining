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
            response.message = " data Filter success "
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
            response.message = " data Filter success "
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
            response.message = " data Filter success "
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
            response.message = " data Filter success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async sortingcommentsdetails(req: Request, res: Response) {
        const sortstring = req.params.sort;
        let sortOrder: any;
        if (sortstring.toLowerCase() === 'asc') {
            sortOrder = 'asc';
        } else if (sortstring.toLowerCase() === 'desc') {
            sortOrder = 'desc';
        } else {
            res.status(400).send('Invalid sort order');
            return;
        }
        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.sortingcomments(sortOrder);
            response.status = 200
            response.message = " data Filter success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async searchcommentsdetails(req: Request, res: Response) {
        const searchstring = req.params.search;
        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.searchcomments(searchstring);
            response.status = 200
            response.message = " data Filter success "
            response.data = commentsresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async filtercommentsdetails(req: Request, res: Response) {
        try {
            const commentsresponse = await commentsRepositary.commentsRepositary.filtercomments();
            response.status = 200
            response.message = " data Filter success "
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