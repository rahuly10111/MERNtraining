import { SUPPLIER_POST_DATA } from "../Action/ActionType"

const initialState = {
    supplierData: [],
    loading: false,
    error: null
}

export const PostSupplierReducers = (state = initialState, action) => {

    switch (action.type) {

        case SUPPLIER_POST_DATA.REQ_SUPPLIER_POST_DATA:
            return { ...state, loading: true }

        case SUPPLIER_POST_DATA.SUCCESS_SUPPLIER_POST_DATA:
            return { ...state, supplierData: action.payload, loading: false, error: null }

        case SUPPLIER_POST_DATA.FAIL_SUPPLIER_POST_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
