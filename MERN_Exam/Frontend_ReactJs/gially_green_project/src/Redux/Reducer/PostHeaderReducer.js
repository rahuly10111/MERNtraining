import { HEADER_POST_DATA } from "../Action/ActionType"

const initialState = {
    headerData: [],
    loading: false,
    error: null
}

export const PostHeaderReducers = (state = initialState, action) => {

    switch (action.type) {

        case HEADER_POST_DATA.REQ_HEADER_POST_DATA:
            return { ...state, loading: true }

        case HEADER_POST_DATA.SUCCESS_HEADER_POST_DATA:
            return { ...state, supplierData: action.payload, loading: false, error: null }

        case HEADER_POST_DATA.FAIL_HEADER_POST_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
