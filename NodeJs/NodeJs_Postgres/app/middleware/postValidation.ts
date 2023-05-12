import validation from './validation';
import { Request, Response, NextFunction } from "express";
import { responseModel } from "../.././interface";
let response = new responseModel;


function postValidation(req: Request, res: Response, next: NextFunction) {
    if (validation.nameValidation(req.body.title)) {
        next();
    } else {
        response.status = 400
        response.message = " Please Provied Valid Title . "
        response.data = null
        response.token = null
        res.send(response)
    }
}

export default postValidation;