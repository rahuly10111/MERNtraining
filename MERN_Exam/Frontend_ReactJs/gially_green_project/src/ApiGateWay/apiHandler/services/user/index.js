import { requestMethod } from '../../../apiUtils/constants';
import { requestModel } from '../../../apiUtils/models/requestModel';
import { axiosRepository } from '../../repository';
import userEndPoints from '../../../apiEndPoints/index';

export const UserService = {
    registrationUser: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.POST;
            reqestObj.url = userEndPoints.userEndPoints.REGISTRATION_USER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },

    loginUser: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.POST;
            reqestObj.url = userEndPoints.userEndPoints.LOGIN_USER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },



    PutUsers: async (userId, body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.PUT;
            reqestObj.url = userEndPoints.userEndPoints.PUT_USER(userId);
            reqestObj.data = body;
            reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },


    GetIdUsers: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.GET;
            reqestObj.url = userEndPoints.userEndPoints.GET_ID_USER;
            reqestObj.data = body;
            reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },

    ViewIdUsers: async (userId) => {
        console.log("fgdfgdfgdfsgd")
        console.log("service",userId)
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.GET;
            reqestObj.url = userEndPoints.userEndPoints.GET_USER(userId);
            reqestObj.data = null;
            reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('loginToken'))}`;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },

};
