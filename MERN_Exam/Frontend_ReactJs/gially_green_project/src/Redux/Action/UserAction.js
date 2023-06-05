
import { userAPI } from "../../ApiGateWay/apiHandler/controllers";
import { USER_REG_DATA, USER_LOGIN_DATA, USER_PUT_DATA, USER_ID_DATA, USER_VIEW_DATA } from "./ActionType";


export function RegistrationNewUser(userdata) {
    return async function (dispatch) {
        dispatch({ type: USER_REG_DATA.REQ_USER_DATA })
        try {
            const res = await userAPI.registrationUser(userdata);
            if (res.ResponseStatus === 200) {
                dispatch({
                    type: USER_REG_DATA.SUCCESS_USER_DATA,
                    payload: "Done",
                })
            }

            if (res.ResponseStatus === 400) {
                const { error } = res.data;
                dispatch({
                    type: USER_REG_DATA.FAIL_USER_DATA,
                    payload: { error },
                })
            }
        } catch (error) {
            dispatch({
                type: USER_REG_DATA.FAIL_USER_DATA,
                payload: { error: 'An error occurred while Adding Data' },
            });
        }
    }

}




export function LoginUserData(userData) {

    return async function (dispatch) {
        dispatch({ type: USER_LOGIN_DATA.REQ_USER_LOGIN_DATA })
        try {
            const res = await userAPI.loginUser(userData);
            if (res.ResponseStatus === 200) {
                localStorage.setItem("loginToken", JSON.stringify(res.Result.token))
                dispatch({
                    type: USER_LOGIN_DATA.SUCCESS_USER_LOGIN_DATA,
                    payload: res.Result,
                })
            }

            if (res.ResponseStatus === 400) {
                dispatch({
                    type: USER_LOGIN_DATA.FAIL_USER_LOGIN_DATA,
                    payload: res.data,
                })
            }
        } catch (error) {
            dispatch({
                type: USER_LOGIN_DATA.FAIL_USER_LOGIN_DATA,
                payload: { error: 'An error occurred while Adding Data' },
            });
        }
    }

}


export function PutUsersData(userId, userData) {
    return async function (dispatch) {
        dispatch({ type: USER_PUT_DATA.REQ_USER_DATA })
        try {
            const res = await userAPI.putUsers(userId, userData);
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: USER_PUT_DATA.SUCCESS_USER_PUT_DATA,
                    payload: data
                })
            }

            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: USER_PUT_DATA.FAIL_USER_PUT_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: USER_PUT_DATA.FAIL_USER_PUT_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}


export function GetUsersIdData() {
    return async function (dispatch) {
        dispatch({ type: USER_ID_DATA.REQ_USER_DATA })
        try {
            const res = await userAPI.getIdUsers();
            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: USER_ID_DATA.SUCCESS_USER_ID_DATA,
                    payload: data
                })
            }

            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: USER_ID_DATA.FAIL_USER_ID_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: USER_ID_DATA.FAIL_USER_ID_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}


export function ViewUsersData(userId) {
    console.log("first", userId)
    return async function (dispatch) {
        dispatch({ type: USER_VIEW_DATA.REQ_USER_VIEW_DATA })
        try {
            const res = await userAPI.ViewIdUsers(userId);
            console.log("Get post data Res value ", res)
            console.log("Get post data Res.Result value ", res.Result)

            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: USER_VIEW_DATA.SUCCESS_USER_VIEW_DATA,
                    payload: data
                })
                console.log("Get user data Data value ", data)
                console.log("Get user data Data data value ", res.data.data)
            }

            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: USER_VIEW_DATA.FAIL_USER_VIEW_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: USER_VIEW_DATA.FAIL_USER_VIEW_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}