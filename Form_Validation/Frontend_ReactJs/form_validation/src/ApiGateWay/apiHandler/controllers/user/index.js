// import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes.ts/enum';
import { commanResponse } from '../../../apiUtils/models/commonResponse';
//import * as yup from 'yup';
import UserService from '../../services/index';
import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes';
export const userController = {
    registrationUser
};

async function registrationUser(object) {
    try {
        let responseOBJ = new commanResponse();

        //schema for payload
        // let userSchema = yup.object({
        //     name: yup.string().required(),
        //     mobile: yup.string().required(),
        //     email: yup.string().required(),
        //     password: yup.string().required(),
        //     age: yup.string().required(),
        //     gender: yup.string().required(),
        //     Birthday: yup.string().required(),
        //     hobbies: yup.string().required(),
        //     favcolor: yup.string().required(),
        //     time: yup.string().required(),

        // });

        // if (await userSchema.isValid(object)) {
        const response = await UserService.UserService.registrationUser(object);

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
        }
        // } else {
        //     responseOBJ.ResponseStatus = ResponseStatus.UnprocessableEntity;
        //     responseOBJ.Status = false;
        //     responseOBJ.Message = await userSchema
        //         .validate(object)
        //         .catch((e) => e.message);
        // }
        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}







