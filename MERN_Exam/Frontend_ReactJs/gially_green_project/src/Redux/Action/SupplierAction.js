
import { supplierAPI } from "../../ApiGateWay/apiHandler/controllers";
import { SUPPLIER_GET_DATA, SUPPLIER_POST_DATA, HEADER_GET_DATA, SUPPLIER_GET_MONTH_DATA } from "./ActionType";


export function GetSupplierData() {
    return async function (dispatch) {
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

export function PostSupplierData(data) {
    console.log(" Post Data ", data)
    return async function (dispatch) {
        dispatch({ type: SUPPLIER_POST_DATA.REQ_SUPPLIER_POST_DATA })
        try {
            const res = await supplierAPI.postSupplier(data);
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: SUPPLIER_POST_DATA.SUCCESS_SUPPLIER_POST_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: SUPPLIER_POST_DATA.FAIL_SUPPLIER_POST_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: SUPPLIER_POST_DATA.FAIL_SUPPLIER_POST_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}


export function getMonthSupplierData(invoicesMonth) {

    return async function (dispatch) {
        dispatch({ type: SUPPLIER_GET_MONTH_DATA.REQ_SUPPLIER_GET_MONTH_DATA })
        try {
            const res = await supplierAPI.getMonthSupplier(invoicesMonth);
            console.log(" Res of Month Invocies ", res)
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: SUPPLIER_GET_MONTH_DATA.SUCCESS_SUPPLIER_GET_MONTH_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: SUPPLIER_GET_MONTH_DATA.FAIL_SUPPLIER_GET_MONTH_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: SUPPLIER_GET_MONTH_DATA.FAIL_SUPPLIER_GET_MONTH_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}



export function GetHeaderData() {
    return async function (dispatch) {
        dispatch({ type: HEADER_GET_DATA.REQ_HEADER_GET_DATA })
        try {
            const res = await supplierAPI.getHeader();
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: HEADER_GET_DATA.SUCCESS_HEADER_GET_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: HEADER_GET_DATA.FAIL_HEADER_GET_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: HEADER_GET_DATA.FAIL_HEADER_GET_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}






