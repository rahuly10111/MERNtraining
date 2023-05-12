import validation from './validation';
import { Request, Response, NextFunction } from "express";
import { responseModel } from "../.././interface";
let response = new responseModel;


async function registrationValidation(req: Request, res: Response, next: NextFunction) {
    if (validation.nameValidation(req.body.name) &&  validation.emailValidation(req.body.email) && validation.passwordValidation(req.body.password)) {
        next();
    } else {
        response.status = 400
        response.message = " Please Provied Valid Name (Eg- abc or Abc) , Email (eg- abc@gmail.com ) and Password (Min 8 Char. )"
        response.data = null
        response.token = null
        res.send(response)
    }

}

export default registrationValidation;


