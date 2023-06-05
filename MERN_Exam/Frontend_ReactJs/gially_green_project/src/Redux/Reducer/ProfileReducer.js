import { USER_ID_DATA } from "../Action/ActionType"

const initialState = {
    usersData: [],
    loading: false,
    error: null
}

export const ProfileReducers = (state = initialState, action) => {

    switch (action.type) {

        case USER_ID_DATA.REQ_USER_DATA:
            return { ...state, loading: true }

        case USER_ID_DATA.SUCCESS_USER_ID_DATA:
            return { ...state, usersData: action.payload, loading: false, error: null }

        case USER_ID_DATA.FAIL_USER_ID_DATA:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }

}
