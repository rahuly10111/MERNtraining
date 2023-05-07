import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { userdetail } from "../../model/userinterface";
import userRepositary from '../../repository/index'

let response = new responseModel;
class usercontroller {
    async postpostdetails(req: Request, res: Response) {
        const userdatas: userdetail = {
            name: req.body.name,
            gender: req.body.gender,
            age: req.body.age
        }
        console.log(userdatas);
        try {
            const userresponse = await userRepositary.userRepositary.createuser(userdatas);
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async getuserdetails(req: Request, res: Response) {


        try {
            const userresponse = await userRepositary.userRepositary.getuser();
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async deleteuserdetails(req: Request, res: Response) {
        const userid = req.params.id;

        try {
            const userresponse = await userRepositary.userRepositary.deleteuser(userid);
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async putuserdetails(req: Request, res: Response) {
        const userid = req.params.id;

        try {
            const dataToUpdate: userdetail = {
                name: req.body.name,
                gender: req.body.gender,
                age: req.body.age
            }
            const userresponse = await userRepositary.userRepositary.putuser(dataToUpdate, userid);
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);




    }

    async sortinguserdetails(req: Request, res: Response) {
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
            const userresponse = await userRepositary.userRepositary.sortinguser(sortOrder);
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }

    async searchuserdetails(req: Request, res: Response) {
        const searchstring = req.params.search;

        try {
            const userresponse = await userRepositary.userRepositary.searchuser(searchstring);
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);



    }

    async filteruserdetails(req: Request, res: Response) {

        try {
            const userresponse = await userRepositary.userRepositary.filteruser();
            response.status = 200
            response.message = " data Filter success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);


    }





}

export default new usercontroller();