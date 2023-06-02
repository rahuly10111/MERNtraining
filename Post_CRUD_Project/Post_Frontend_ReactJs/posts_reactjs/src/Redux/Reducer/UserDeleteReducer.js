import { USER_DELETE_DATA } from "../Action/ActionType"

const initialState = {
    UsersData: [],
    loading: false,
    error: null
}

export const UserDeleteReducers = (state = initialState, action) => {

    switch (action.type) {

        case USER_DELETE_DATA.REQ_USER_DATA:
            return { ...state, loading: true }

        case USER_DELETE_DATA.SUCCESS_USER_DELETE_DATA:
            return { ...state, UsersData: action.payload, loading: false, error: null }

        case USER_DELETE_DATA.FAIL_USER_DELETE_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;

    }

}
