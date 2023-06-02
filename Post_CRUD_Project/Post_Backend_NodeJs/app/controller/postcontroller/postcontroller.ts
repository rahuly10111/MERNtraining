import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { postdetails } from "../../model/postinterface";
import postRepositary from '../../repository/index';
import CheckPermission from "../../permission/checkPermission";
import Permission from "../../permission/permission";

let response = new responseModel;
class postcontroller {
    async postpostdetails(req: Request, res: Response) {
        const postdata: postdetails = {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
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


    async getpostdetailsid(req: Request, res: Response) {
        const permission = (req as any).permission
        if (CheckPermission(Permission.VIEW_POST_PERMISSION, permission)) {
            try {
                const postid = req.params.id;
                const postresponse = await postRepositary.postRepositary.getpostid(postid);
                response.status = 200
                response.message = " Post  data Get success "
                response.data = postresponse

            } catch (error) {
                console.log(error);
                response.status = 400
                response.message = error as string
                response.data = null
            }
        } else {
            response.status = 403
            response.message = "You are not allowed to access this address"
            response.data = null
            response.token = null
        }


        res.send(response);



    }



    async deletepostdetails(req: Request, res: Response) {
        const permission = (req as any).permission
        if (CheckPermission(Permission.DELETE_POST_PERMISSION, permission)) {
            try {
                const postid = req.params.id;
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
        } else {
            response.status = 403
            response.message = "You are not allowed to access this address"
            response.data = null
            response.token = null
        }
        res.send(response);

    }

    async putpostdetails(req: Request, res: Response) {
        const permission = (req as any).permission
        if (CheckPermission(Permission.EDIT_POST_PERMISSION, permission)) {
            try {
                const postid = req.params.id;
                const dataToUpdate: postdetails = {
                    title: req.body.title,
                    description: req.body.description,
                    category: req.body.category
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
        } else {
            response.status = 403
            response.message = "You are not allowed to access this address"
            response.data = null
            response.token = null
        }


        res.send(response);
    }


}

export default new postcontroller();