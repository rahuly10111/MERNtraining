import { SUPPLIER_GET_MONTH_DATA } from "../Action/ActionType"

const initialState = {
    supplierData: [],
    loading: false,
    error: null
}

export const GetMonthSupplierReducers = (state = initialState, action) => {

    switch (action.type) {

        case SUPPLIER_GET_MONTH_DATA.REQ_SUPPLIER_GET_MONTH_DATA:
            return { ...state, loading: true }

        case SUPPLIER_GET_MONTH_DATA.SUCCESS_SUPPLIER_GET_MONTH_DATA:
            return { ...state, supplierData: action.payload, loading: false, error: null }

        case SUPPLIER_GET_MONTH_DATA.FAIL_SUPPLIER_GET_MONTH_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
