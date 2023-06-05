import { USER_REG_DATA } from "../Action/ActionType"

const initialState = {
    usersData: [],
    loading: false,
    error: null
}

export const UserRegReducers = (state = initialState, action) => {

    switch (action.type) {

        case USER_REG_DATA.REQ_USER_DATA:
            return { ...state, loading: true }

        case USER_REG_DATA.SUCCESS_USER_DATA:
            return { ...state, usersData: action.payload, loading: false, error: null }

        case USER_REG_DATA.FAIL_USER_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
