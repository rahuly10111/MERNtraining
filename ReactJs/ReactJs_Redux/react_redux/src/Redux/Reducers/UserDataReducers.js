
import { UserDatatype } from "../ActionType";

const initialState = {
    userData: [],
    loading: false,
    message: null
}

export const UserDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case UserDatatype.REQ_USER_DATA:
            return { ...state, loading: true }

        case UserDatatype.SUCCESS_USER_DATA:
            console.log("UserData Success action", action)
            console.log("UserData Success action-payload", action.payload)
            console.log("UserData Success action-payload-data", action.payload.data)
            return {
                ...state, loading: false, userData: action.payload.data, message: action.payload.message
            }

        case UserDatatype.FAIL_USER_DATA:
            return {
                ...state, loading: false, message: action.payload.message
            }

        default:
            return state;
    }


}