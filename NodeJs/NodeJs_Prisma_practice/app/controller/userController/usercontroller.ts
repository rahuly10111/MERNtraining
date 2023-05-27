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
            response.message = " User  data Added success "
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
            response.message = " User data Get success "
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
            response.message = " User  data Deleted success "
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
            response.message = " User  data Edited success "
            response.data = userresponse

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
        }
        res.send(response);
    }

    async sortingSearchUserDetails(req: Request, res: Response) {
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

            const userresponse = await userRepositary.userRepositary.sortingSearchuser(orderByCondition, whereCondition);
            response.status = 200
            response.message = " User  data Sorted success "
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
            response.message = " User  data Filter success "
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