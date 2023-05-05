import { Request, Response } from "express";
//import { responseModel } from "../../../interface";
import { userdetail } from "../../model/userinterface";
import userRepositary from '../../repository/index'

//let response = new responseModel;
class usercontroller {
    async postpostdetails(req: Request, res: Response) {
        const userdatas: userdetail = {
            name: req.body.name
        }
        console.log(userdatas);

      
            const userresponse = await userRepositary.userRepositary.createuser(userdatas);
           
        res.send(userresponse)
    }

    async getuserdetails(req: Request, res: Response) {
       
            const userresponse = await userRepositary.userRepositary.getuser();
           
        res.send(userresponse);
    }

    


}

export default new usercontroller();