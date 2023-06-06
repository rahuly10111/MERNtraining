import { SUPPLIER_GET_DATA } from "../Action/ActionType"

const initialState = {
    supplierData: [],
    loading: false,
    error: null
}

export const GetSupplierReducers = (state = initialState, action) => {

    switch (action.type) {

        case SUPPLIER_GET_DATA.REQ_SUPPLIER_GET_DATA:
            return { ...state, loading: true }

        case SUPPLIER_GET_DATA.SUCCESS_SUPPLIER_GET_DATA:
            return { ...state, supplierData: action.payload, loading: false, error: null }

        case SUPPLIER_GET_DATA.FAIL_SUPPLIER_GET_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
