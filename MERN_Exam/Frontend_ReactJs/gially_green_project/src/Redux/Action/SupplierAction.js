
import { supplierAPI } from "../../ApiGateWay/apiHandler/controllers";
import { SUPPLIER_GET_DATA, SUPPLIER_POST_DATA, HEADER_GET_DATA, SUPPLIER_GET_MONTH_DATA, SUPPLIER_PUT_DATA, HEADER_GET_MONTH_DATA, HEADER_POST_DATA, HEADER_PUT_DATA, EMAIL_POST_DATA } from "./ActionType";


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


export function PutSupplierData(data) {
    console.log(" Put Data ", data)
    return async function (dispatch) {
        dispatch({ type: SUPPLIER_PUT_DATA.REQ_SUPPLIER_PUT_DATA })
        try {
            const res = await supplierAPI.putSupplier(data);
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: SUPPLIER_PUT_DATA.SUCCESS_SUPPLIER_PUT_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: SUPPLIER_PUT_DATA.FAIL_SUPPLIER_PUT_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: SUPPLIER_PUT_DATA.FAIL_SUPPLIER_PUT_DATA,
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


export function getMonthHeaderData(headerMonth) {

    return async function (dispatch) {
        dispatch({ type: HEADER_GET_MONTH_DATA.REQ_HEADER_GET_MONTH_DATA })
        try {
            const res = await supplierAPI.getMonthHeader(headerMonth);
            console.log(" Res of Month Header ", res)
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: HEADER_GET_MONTH_DATA.SUCCESS_HEADER_GET_MONTH_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: HEADER_GET_MONTH_DATA.FAIL_HEADER_GET_MONTH_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: HEADER_GET_MONTH_DATA.FAIL_HEADER_GET_MONTH_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}


export function PostHeaderData(data) {
    console.log(" Post  haeder Data ", data)
    return async function (dispatch) {
        dispatch({ type: HEADER_POST_DATA.REQ_HEADER_POST_DATA })
        try {
            const res = await supplierAPI.postHeader(data);
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: HEADER_POST_DATA.SUCCESS_HEADER_POST_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: HEADER_POST_DATA.FAIL_HEADER_POST_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: HEADER_POST_DATA.FAIL_HEADER_POST_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}



export function PutHeaderData(data) {
    console.log(" Put Data ", data)
    return async function (dispatch) {
        dispatch({ type: HEADER_PUT_DATA.REQ_HEADER_PUT_DATA })
        try {
            const res = await supplierAPI.putHeader(data);
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: HEADER_PUT_DATA.SUCCESS_HEADER_PUT_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: HEADER_PUT_DATA.FAIL_HEADER_PUT_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: HEADER_PUT_DATA.FAIL_HEADER_PUT_DATA,
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
            console.log("action", res)
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


export function PostEmail(data) {

    return async function (dispatch) {
        dispatch({ type: EMAIL_POST_DATA.REQ_EMAIL_POST_DATA })
        try {
            const res = await supplierAPI.postEmail(data);
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: EMAIL_POST_DATA.SUCCESS_EMAIL_POST_DATA,
                    payload: data
                })
            }
            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: EMAIL_POST_DATA.FAIL_EMAIL_POST_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: EMAIL_POST_DATA.FAIL_EMAIL_POST_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}



