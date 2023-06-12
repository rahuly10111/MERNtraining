import { HEADER_GET_MONTH_DATA } from "../Action/ActionType"

const initialState = {
    headerData: [],
    loading: false,
    error: null
}

export const GetMonthHeaderReducers = (state = initialState, action) => {

    switch (action.type) {

        case HEADER_GET_MONTH_DATA.REQ_HEADER_GET_MONTH_DATA:
            return { ...state, loading: true }

        case HEADER_GET_MONTH_DATA.SUCCESS_HEADER_GET_MONTH_DATA:
            return { ...state, headerData: action.payload, loading: false, error: null }

        case HEADER_GET_MONTH_DATA.FAIL_HEADER_GET_MONTH_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
