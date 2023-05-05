import { Request, Response } from "express";
//import { responseModel } from "../../../interface";
import { postdetails } from "../../model/postinterface";
import postRepositary from '../../repository/index'

//let response = new responseModel;
class postcontroller {
    async postpostdetails(req: Request, res: Response) {
        const socialdatas: postdetails = {
            title: req.body.title,
            userid:req.body.userid
           
        }
    
            const countryresponse = await postRepositary.postRepositary.createpost(socialdatas);
           
        res.send(countryresponse)
    }

    async getpostdetails(req: Request, res: Response) {
        
            const countryresponse = await postRepositary.postRepositary.getpost();
            
        res.send(countryresponse);
    }

   
}

export default new postcontroller();