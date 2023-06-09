import { HEADER_GET_DATA } from "../Action/ActionType"

const initialState = {
    headerData: [],
    loading: false,
    error: null
}

export const GetHeaderReducers = (state = initialState, action) => {

    switch (action.type) {

        case HEADER_GET_DATA.REQ_HEADER_GET_DATA:
            return { ...state, loading: true }

        case HEADER_GET_DATA.SUCCESS_HEADER_GET_DATA:
            return { ...state, headerData: action.payload, loading: false, error: null }

        case HEADER_GET_DATA.FAIL_HEADER_GET_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
