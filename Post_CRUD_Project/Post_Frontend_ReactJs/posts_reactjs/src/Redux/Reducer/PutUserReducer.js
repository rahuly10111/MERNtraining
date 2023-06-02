import { USER_PUT_DATA } from "../Action/ActionType"

const initialState = {
    UsersData: [],
    loading: false,
    error: null
}

export const PutUserReducers = (state = initialState, action) => {

    switch (action.type) {

        case USER_PUT_DATA.REQ_USER_DATA:
            return { ...state, loading: true }

        case USER_PUT_DATA.SUCCESS_USER_PUT_DATA:
            return { ...state, UsersData: action.payload, loading: false, error: null }

        case USER_PUT_DATA.FAIL_USER_PUT_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
