import { Request, Response } from "express";
import senderUserModel from "../Model/senderuserSchema";
import { responseModel } from "../Model/responseModel";
let response = new responseModel();
class senderUserController {
    async getsenderdetail(req: Request, res: Response) {
        const userData = await senderUserModel.find()
        try {
            response.status = 200
            response.message = " User Details Get Successfully"
            response.data = userData
        } catch (ex: any) {
            response.status = 400
            response.message = " User Detail Not Getting"
            response.data = null
        }
        res.send(response);
    }

}

export default new senderUserController();