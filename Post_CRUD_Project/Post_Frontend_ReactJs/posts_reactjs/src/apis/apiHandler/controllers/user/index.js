// import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes.ts/enum';
import { commanResponse } from '../../../apiUtils/models/commonResponse';
import * as yup from 'yup';
import UserService from '../../services/index';
import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes';
export const userController = {
    registrationUser, loginUser, getUsers, deleteUsers, putUsers, getIdUsers, ViewIdUsers
};

async function registrationUser(object) {
    try {
        let responseOBJ = new commanResponse();

        //schema for payload
        let userSchema = yup.object({
            name: yup.string().required(),

            email: yup.string().required(),

            password: yup.string().required(),

            mobile: yup.string().required(),

            address: yup.string().required(),

            pincode: yup.string().required(),

        });

        if (await userSchema.isValid(object)) {
            const response = await UserService.UserService.registrationUser(object);

            if (response) {
                responseOBJ.Status = response?.status === 200 ? true : false;
                responseOBJ.Result = response?.data ? response?.data : undefined;
                responseOBJ.ResponseStatus = response.status;
            }
        } else {
            responseOBJ.ResponseStatus = ResponseStatus.UnprocessableEntity;
            responseOBJ.Status = false;
            responseOBJ.Message = await userSchema
                .validate(object)
                .catch((e) => e.message);
        }
        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}


async function loginUser(object) {
    try {
        let responseOBJ = new commanResponse();

        //schema for payload
        let userSchema = yup.object({

            email: yup.string().required(),

            password: yup.string().required(),

        });

        if (await userSchema.isValid(object)) {
            const response = await UserService.UserService.loginUser(object);

            if (response) {
                responseOBJ.Status = response?.status === 200 ? true : false;
                responseOBJ.Result = response?.data ? response?.data : undefined;
                responseOBJ.ResponseStatus = response.status;
            }
        } else {
            responseOBJ.ResponseStatus = ResponseStatus.UnprocessableEntity;
            responseOBJ.Status = false;
            responseOBJ.Message = await userSchema
                .validate(object)
                .catch((e) => e.message);
        }
        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}

async function getUsers() {
    try {
        let responseOBJ = new commanResponse();
        const response = await UserService.UserService.GetAllUsers();

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
        }

        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}


async function deleteUsers(userId) {
    console.log("Delete User Id ", userId)
    try {
        let responseOBJ = new commanResponse();
        const response = await UserService.UserService.DeleteUsers(userId);

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
        }

        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}


async function putUsers(userId, object) {

    console.log("firstxdsccc")
    console.log("put Post Id ", userId)
    try {
        let responseOBJ = new commanResponse();
        console.log("dsfwdffs", userId)
        const response = await UserService.UserService.PutUsers(userId.id, object);

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
            // }
        } else {
            responseOBJ.ResponseStatus = ResponseStatus.UnprocessableEntity;
            responseOBJ.Status = false;
        }
        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}


async function getIdUsers() {
    try {
        let responseOBJ = new commanResponse();
        const response = await UserService.UserService.GetIdUsers();

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
        }

        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}



async function ViewIdUsers(userId) {
    console.log("ddfgsdfsgfdsagfdgdf")
    console.log("controller", userId)
    try {
        let responseOBJ = new commanResponse();
        const response = await UserService.UserService.ViewIdUsers(userId);

        if (response) {
            responseOBJ.Status = response?.status === 200 ? true : false;
            responseOBJ.Result = response?.data ? response?.data : undefined;
            responseOBJ.ResponseStatus = response.status;
        }

        return responseOBJ;
    } catch (error) {
        console.log('error From controller::>', error);
    }
}