import { HEADER_PUT_DATA } from "../Action/ActionType"

const initialState = {
    headerData: [],
    loading: false,
    error: null
}

export const PostHeaderReducers = (state = initialState, action) => {

    switch (action.type) {

        case HEADER_PUT_DATA.REQ_HEADER_PUT_DATA:
            return { ...state, loading: true }

        case HEADER_PUT_DATA.SUCCESS_HEADER_PUT_DATA:
            return { ...state, supplierData: action.payload, loading: false, error: null }

        case HEADER_PUT_DATA.FAIL_HEADER_PUT_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
