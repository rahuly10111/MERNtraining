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


    GetMonthSupplier: async (invoicesMonth) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.GET;
            reqestObj.url = supplierEndPoints.supplierEndPoints.GET_SUPPLIER_MONTH(invoicesMonth);
            reqestObj.data = null;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },



    PostSupplier: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.POST;
            reqestObj.url = supplierEndPoints.supplierEndPoints.POST_SUPPLIER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },


    PutSupplier: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.PUT;
            reqestObj.url = supplierEndPoints.supplierEndPoints.PUT_SUPPLIER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },



    GetMonthHeader: async (headerMonth) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.GET;
            reqestObj.url = supplierEndPoints.supplierEndPoints.GET_HEADER_MONTH(headerMonth);
            reqestObj.data = null;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },


    PostHeader: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.POST;
            reqestObj.url = supplierEndPoints.supplierEndPoints.POST_HEADER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },



    PutHeader: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.PUT;
            reqestObj.url = supplierEndPoints.supplierEndPoints.PUT_HEADER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },

    GetAllHeader: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.GET;
            reqestObj.url = supplierEndPoints.supplierEndPoints.GET_ALL_HEADER;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },


    PostEmail: async (body) => {
        const reqestObj = new requestModel();
        try {
            reqestObj.method = requestMethod.POST;
            reqestObj.url = supplierEndPoints.supplierEndPoints.POST_EMAIL;
            reqestObj.data = body;
            return await axiosRepository.request(reqestObj);
        } catch (error) {
            console.log('error from services::>', error);
        }
    },



};
