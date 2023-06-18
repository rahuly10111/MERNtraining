import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { details } from "../../model/detailsInterface";
import detailRepositary from '../../repository/index'
import * as yup from 'yup';


let response = new responseModel;
class detailcontroller {
    async UserDetails(req: Request, res: Response) {
        try {
            const data = req.body;
            console.log("firstgfdfg", data);

            const details = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                mobile: parseInt(req.body.mobile),
                age: parseInt(req.body.age),
                gender: req.body.gender,
                Birthday: req.body.Birthday,
                hobbies: req.body.hobbies,
                favcolor: req.body.favcolor,
                time: req.body.time,
                // file: req.body.file
            }


            let userSchema = yup.object({
                name: yup.string().required(" Please Enter Your Name !"),
                email: yup.string().required(" Please Enter Your Email !"),
                password: yup.string().required(" Please Enter Your Age !"),
                mobile: yup.number().integer().positive().required(" Please Enter Your Mobile Number !"),
                age: yup.number().integer().positive().required(" Please Enter Your Age !"),
                gender: yup.string().required(" Please Enter Your Gender !"),
                Birthday: yup.string().required(" Please Enter Your BirthDay ! "),
                hobbies: yup.array().required(" Please Enter Your Hobbies ! "),
                favcolor: yup.string().required(),
                time: yup.string().required(" Please Enter Your Time ! "),

            });

            //  console.log(userSchema)

            if (await userSchema.isValid(details)) {

                const userresponse = await detailRepositary.detailsRepository.userDetail(details);
                response.status = 200
                response.message = " User  data Added success "
                response.data = userresponse
                response.token = null
            } else {
                console.log("res error ", Error);
                response.status = 400
                response.message = Error as unknown as string
                response.data = null
                response.token = null
            }
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

export default new detailcontroller();