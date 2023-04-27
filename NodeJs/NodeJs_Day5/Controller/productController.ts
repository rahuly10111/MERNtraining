import { Request, Response } from 'express';
import { Root } from '../Interface/productInterface';
import { responseModel } from '../Model/productModel';
import jsondata from '../Investment.json'
let response = new responseModel();
class productController {
    getproduct(req: Request, res: Response): any {
        let arraydata: Root = jsondata;
        try {
            response.status = 200
            response.message = "Product Get Successfully";
            response.data = arraydata
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
        }
        res.send(response);
    }
    postproduct(req: Request, res: Response): any {
        try {
            response.status = 200
            response.message = "Product Get Successfully";
            response.data = req.body
        }
        catch (ex: any) {
            response.status = 400
            response.message = ex.message;
        }
        res.send(response);
    }

}

export default new productController()