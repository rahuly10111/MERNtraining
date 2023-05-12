import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { logindetail } from "../../model/loginInterface";
import loginRepositary from '../../repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let response = new responseModel;
class logincontroller {
    async postUserLoginDetails(req: Request, res: Response) {
        try {
            const logindata: logindetail = {
                email: req.body.email,
                password: req.body.password
            }

            const userresponse = await loginRepositary.loginRepositary.userLogin(logindata.email);
            if (userresponse && (await bcrypt.compare(logindata.password, userresponse.password))) {
                const token = jwt.sign({ userId: userresponse.id }, process.env.JWT_SECRET!, {
                    expiresIn: '1h',
                });
                response.status = 200
                response.message = " User Has Logined successfully "
                response.data = userresponse
                response.token = token

            }
            else {
                throw " PLease Check Your Login credential "
            }

        } catch (error) {
            console.log(error);
            response.status = 400
            response.message = error as string
            response.data = null
            response.token = null
        }
        res.send(response);


    }



}

export default new logincontroller();