import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { userProfiledetail } from "../../model/userProfileinterface";
import userProfilerepository from '../../repository/index'

let response = new responseModel;
class userProfilecontroller {
    async postuserdetails(req: Request, res: Response) {
        try {
            //  const Uid = (req as any).Uid
            const userdatas: userProfiledetail = {
                petname: req.body.petname,
                gender: req.body.gender,
                age: req.body.age,
                userId: (req as any).Uid
            }
            console.log(userdatas);

            const userresponse = await userProfilerepository.userProfilerepository.createuser(userdatas);
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
            const Uid = (req as any).Uid
            const userresponse = await userProfilerepository.userProfilerepository.getuser(Uid);
            response.status = 200
            response.message = " User  data Get success "
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
        try {
            const postid = parseInt(req.params.id);
            const userresponse = await userProfilerepository.userProfilerepository.deleteuser(postid);
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
        try {
            const postid = parseInt(req.params.id);
            const dataToUpdate: userProfiledetail = {
                petname: req.body.petname,
                gender: req.body.gender,
                age: req.body.age,
                userId: req.body.userId
            }
            const userresponse = await userProfilerepository.userProfilerepository.putuser(dataToUpdate, postid);
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

            const userresponse = await userProfilerepository.userProfilerepository.sortingSearchuser(orderByCondition, whereCondition);
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
            const userresponse = await userProfilerepository.userProfilerepository.filteruser();
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

export default new userProfilecontroller();