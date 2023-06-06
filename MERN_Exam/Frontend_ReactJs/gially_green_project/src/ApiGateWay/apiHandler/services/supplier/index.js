import { requestMethod } from '../../../apiUtils/constants';
import { requestModel } from '../../../apiUtils/models/requestModel';
import { axiosRepository } from '../../repository';
import supplierEndPoints from '../../../apiEndPoints/index';

export const SupplierService = {

    GetAllSupplier: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.GET;
            reqestObj.url = supplierEndPoints.supplierEndPoints.GET_ALL_USER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },







};
