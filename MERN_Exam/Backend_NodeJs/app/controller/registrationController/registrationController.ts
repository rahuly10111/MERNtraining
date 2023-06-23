import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { registrationdetails } from "../../model/registrationInterface";
import registrationRepositary from '../../repository/index'
import bcrypt from 'bcrypt'


let response = new responseModel;
class registrationcontroller {
    async UserRegistrstionDetails(req: Request, res: Response) {
        try {
            const registrationData: registrationdetails = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
            }
            const hashedPassword = await bcrypt.hash(registrationData.password, 10);
            registrationData.password = hashedPassword;

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


    async getIdUserRegistrstionDetails(req: Request, res: Response) {

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
        res.send(response);
    }


    async getIdUserDetails(req: Request, res: Response) {
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

        res.send(response);
    }






    async putUserRegistrstionDetails(req: Request, res: Response) {
        try {
            const userid = req.params.id;
            const registrationData: registrationdetails = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
            }
            const hashedPassword = await bcrypt.hash(registrationData.password, 10);
            registrationData.password = hashedPassword;

            const userresponse = await registrationRepositary.registrationRepository.editUser(registrationData, userid);
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
        res.send(response);
    }



}

export default new registrationcontroller();