
import { supplierAPI } from "../../ApiGateWay/apiHandler/controllers";
import { SUPPLIER_GET_DATA, } from "./ActionType";


export function GetSupplierData() {
    return async function (dispatch) {
        console.log("Action first")
        dispatch({ type: SUPPLIER_GET_DATA.REQ_SUPPLIER_GET_DATA })
        try {
            const res = await supplierAPI.getSupplier();

            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: SUPPLIER_GET_DATA.SUCCESS_SUPPLIER_GET_DATA,
                    payload: data
                })

            }

            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: SUPPLIER_GET_DATA.FAIL_SUPPLIER_GET_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: SUPPLIER_GET_DATA.FAIL_SUPPLIER_GET_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}








