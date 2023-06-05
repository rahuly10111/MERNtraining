import { USER_VIEW_DATA } from "../Action/ActionType"

const initialState = {
    usersData: [],
    loading: false,
    error: null
}

export const ViewUserReducers = (state = initialState, action) => {

    switch (action.type) {

        case USER_VIEW_DATA.REQ_USER_VIEW_DATA:
            return { ...state, loading: true }

        case USER_VIEW_DATA.SUCCESS_USER_VIEW_DATA:
            return { ...state, usersData: action.payload, loading: false, error: null }

        case USER_VIEW_DATA.FAIL_USER_VIEW_DATA:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }

}
