// import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes.ts/enum';
import { commanResponse } from '../../../apiUtils/models/commonResponse';
import * as yup from 'yup';
import SupplierService from '../../services/index';
import { ResponseStatus } from '../../../apiUtils/interfacesAndTypes';
export const supplierController = {
    getSupplier
};


async function getSupplier() {
    try {
        let responseOBJ = new commanResponse();
        const response = await SupplierService.SupplierService.GetAllSupplier();
        console.log("first")
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




