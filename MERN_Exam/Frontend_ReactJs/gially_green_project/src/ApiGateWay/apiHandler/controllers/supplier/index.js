// import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes.ts/enum';
import { commanResponse } from '../../../apiUtils/models/commonResponse';
import * as yup from 'yup';
import SupplierService from '../../services/index';
import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes';
export const supplierController = {
    getSupplier, postSupplier, getHeader, getMonthSupplier, putSupplier, getMonthHeader, postHeader, putHeader, postEmail
};


async function getSupplier() {
    try {
        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.GetAllSupplier();
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


async function postSupplier(object) {
    try {

        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.PostSupplier(object);
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

async function putSupplier(object) {
    try {

        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.PutSupplier(object);
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



async function getMonthSupplier(invoiesMonth) {
    try {

        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.GetMonthSupplier(invoiesMonth);
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


async function getMonthHeader(headerMonth) {
    try {
        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.GetMonthHeader(headerMonth);
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


async function postHeader(object) {
    try {

        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.PostHeader(object);
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


async function putHeader(object) {
    try {

        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.PutHeader(object);
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

async function getHeader() {
    try {
        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.GetAllHeader();
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

async function postEmail(object) {
    try {

        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.PostEmail(object);
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