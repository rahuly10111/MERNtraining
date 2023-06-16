import { requestMethod } from '../../../apiUtils/constants';
import { requestModel } from '../../../apiUtils/models/requestModel';
import { axiosRepository } from '../../repository';
import userEndPoints from '../../../apiEndPoints/index';

export const UserService = {
    registrationUser: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.POST;
            reqestObj.url = userEndPoints.userEndPoints.USER_DETAILS;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },

    

   

};
