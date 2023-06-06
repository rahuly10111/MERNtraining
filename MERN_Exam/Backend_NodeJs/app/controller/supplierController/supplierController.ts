import { Request, Response } from "express";
import { responseModel } from "../../../interface";
import { supplierdetails } from "../../model/supplierInterface";
import supplierrepository from '../../repository/index'



let response = new responseModel;
class suppliercontroller {
    async getSupplierDetails(req: Request, res: Response) {

        try {
            const supplierresponse = await supplierrepository.supplierrepository.getSupplier();
            response.status = 200
            response.message = " supplier  data Get success "
            response.data = supplierresponse
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

export default new suppliercontroller();