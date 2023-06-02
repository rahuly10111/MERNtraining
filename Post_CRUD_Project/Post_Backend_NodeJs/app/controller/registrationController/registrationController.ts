import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { registrationdetails } from "../../model/registrationInterface";
import registrationRepositary from '../../repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import CheckPermission from "../../permission/checkPermission";
import Permission from "../../permission/permission";

let response = new responseModel;
class registrationcontroller {
    async postUserRegistrstionDetails(req: Request, res: Response) {
        try {
            const registrationData: registrationdetails = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                address: req.body.address,
                pincode: req.body.pincode,
                roleID: "64784ec57a256c92ff966ab7"
            }
            const hashedPassword = await bcrypt.hash(registrationData.password, 10);
            registrationData.password = hashedPassword

            // const token = jwt.sign({ userId: registrationData.id }, process.env.JWT_SECRET!, {
            //     expiresIn: '1h',
            // });

            const userresponse = await registrationRepositary.registrationRepository.userNewRegistration(registrationData);
            response.status = 200
            response.message = " User  data Added success "
            response.data = userresponse
            response.token = null
        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }


    async getUserRegistrstionDetails(req: Request, res: Response) {

        try {
            const userresponse = await registrationRepositary.registrationRepository.getAllUser();
            response.status = 200
            response.message = " User  data Get success "
            response.data = userresponse
            response.token = null
        } catch (error) {
            console.log("resqw", error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);
    }


    async getIdUserRegistrstionDetails(req: Request, res: Response) {
        const permission = (req as any).permission
        if (CheckPermission(Permission.VIEW_PROFILE, permission)) {
            try {
                const Uid = (req as any).Uid;
                const userresponse = await registrationRepositary.registrationRepository.getUserid(Uid);
                response.status = 200
                response.message = " User  data Get By Id  success "
                response.data = userresponse
                response.token = null
            } catch (error) {
                console.log("resqw", error);
                response.status = 400
                response.message = error as string
                response.data = null
                response.token = null
            }
        } else {
            response.status = 403
            response.message = "You are not allowed to access this address"
            response.data = null
            response.token = null
        }

        res.send(response);
    }


    async getIdUserDetails(req: Request, res: Response) {
        const permission = (req as any).permission

        if (CheckPermission(Permission.VIEW_USER_PERMISSION, permission)) {

            try {
                const userid = req.params.id;
                const userresponse = await registrationRepositary.registrationRepository.getUserByid(userid);
                response.status = 200
                response.message = " User  data Get By Id  success "
                response.data = userresponse
                response.token = null
            } catch (error) {
                response.status = 400
                response.message = error as string
                response.data = null
                response.token = null
            }
        }
        else {
            response.status = 403
            response.message = "You are not allowed to access this address"
            response.data = null
            response.token = null
        }
        res.send(response);
    }



    async deleteUserRegistrstionDetails(req: Request, res: Response) {
        const permission = (req as any).permission
        if (CheckPermission(Permission.DELETE_USER_PERMISSION, permission)) {
            try {
                const userid = req.params.id;
                const userresponse = await registrationRepositary.registrationRepository.deleteUser(userid);
                response.status = 200
                response.message = " User  data Deleted success "
                response.data = userresponse
                response.token = null
            } catch (error) {
                console.log("resqw", error);
                response.status = 400
                response.message = error as string
                response.data = null
                response.token = null
            }
        }
        else {
            response.status = 403
            response.message = "You are not allowed to access this address"
            response.data = null
            response.token = null
        }


        res.send(response);
    }


    async putUserRegistrstionDetails(req: Request, res: Response) {
        const permission = (req as any).permission

        if (CheckPermission(Permission.EDIT_USER_PERMISSION, permission)) {
            try {
                const userid = req.params.id;
                const registrationData: registrationdetails = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    mobile: req.body.mobile,
                    address: req.body.address,
                    pincode: req.body.pincode,
                    roleID: req.body.roleID
                }

                const hashedPassword = await bcrypt.hash(registrationData.password, 10);
                registrationData.password = hashedPassword;

                const userresponse = await registrationRepositary.registrationRepository.putUser(registrationData, userid);
                response.status = 200
                response.message = " User  data Edited success "
                response.data = userresponse
                response.token = null
            } catch (error) {
                console.log("resqw", error);
                response.status = 400
                response.message = error as string
                response.data = null
                response.token = null
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

export default new registrationcontroller();