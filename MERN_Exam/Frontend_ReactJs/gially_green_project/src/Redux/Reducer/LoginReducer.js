import { USER_LOGIN_DATA } from "../Action/ActionType"

const initialState = {
    usersData: [],
    loading: false,
    error: null
}

export const UserLoginReducers = (state = initialState, action) => {

    switch (action.type) {

        case USER_LOGIN_DATA.REQ_USER_LOGIN_DATA:
            return { ...state, loading: true }

        case USER_LOGIN_DATA.SUCCESS_USER_LOGIN_DATA:
            return { ...state, usersData: action.payload, loading: false, error: null }

        case USER_LOGIN_DATA.FAIL_USER_LOGIN_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
