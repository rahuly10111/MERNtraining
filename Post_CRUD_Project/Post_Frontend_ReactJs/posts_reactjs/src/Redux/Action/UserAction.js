
import { userAPI } from "../../apis/apiHandler/controllers";
import { USER_POST_DATA, USER_LOGIN_DATA, USER_GET_DATA, USER_DELETE_DATA, USER_PUT_DATA, USER_ID_DATA, USER_VIEW_DATA } from "./ActionType";


export function RegistrationUser(userdata) {
    return async function (dispatch) {
        dispatch({ type: USER_POST_DATA.REQ_USER_DATA })
        try {
            console.log("User data get in action", userdata)
            const res = await userAPI.registrationUser(userdata);

            // const res = await axios.post("http://localhost:3030/mediaapp/postuserdetail", userdata);
            console.log("Add User Data res Value ", res)
            if (res.ResponseStatus === 200) {
                dispatch({
                    type: USER_POST_DATA.SUCCESS_USER_DATA,
                    payload: "Done",
                })
                console.log("done ")
            }

            if (res.ResponseStatus === 400) {
                const { error } = res.data;
                dispatch({
                    type: USER_POST_DATA.FAIL_USER_DATA,
                    payload: { error },
                })
            }
        } catch (error) {
            dispatch({
                type: USER_POST_DATA.FAIL_USER_DATA,
                payload: { error: 'An error occurred while Adding Data' },
            });
        }
    }

}




export function LoginUser(userData) {
    console.log("dgjdfgfdogjsdfsbdfgdf")
    return async function (dispatch) {
        dispatch({ type: USER_LOGIN_DATA.REQ_USER_LOGIN_DATA })
        try {
            console.log("dsfdsgfadsgggfjhjkkghkghjgjghj")
            console.log("User data get in action", userData)

            // const res = await axios.post("http://localhost:3030/mediaapp/postlogin", postdata);
            const res = await userAPI.loginUser(userData);
            console.log("Add login User Data res Value ", JSON.stringify(res))
            if (res.ResponseStatus === 200) {
                // localStorage.setItem("permission",res.Result.data)
                localStorage.setItem("permission", JSON.stringify(res.Result.data))
                localStorage.setItem("loginToken", JSON.stringify(res.Result.token))
                dispatch({
                    type: USER_LOGIN_DATA.SUCCESS_USER_LOGIN_DATA,
                    payload: res.Result,
                })
                console.log("done ")
            }

            if (res.ResponseStatus === 400) {

                dispatch({
                    type: USER_LOGIN_DATA.FAIL_USER_LOGIN_DATA,
                    payload: res.data,
                })
            }
        } catch (error) {
            dispatch({
                type: USER_POST_DATA.FAIL_USER_DATA,
                payload: { error: 'An error occurred while Adding Data' },
            });
        }
    }

}

export function GetUsersData() {
    return async function (dispatch) {
        dispatch({ type: USER_GET_DATA.REQ_USER_DATA })
        try {
            const res = await userAPI.getUsers();
            console.log("Get post data Res value ", res)
            console.log("Get post data Res.Result value ", res.Result)

            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: USER_GET_DATA.SUCCESS_USER_GET_DATA,
                    payload: data
                })
                console.log("Get user data Data value ", data)
                console.log("Get user data Data data value ", res.data.data)
            }

            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: USER_GET_DATA.FAIL_USER_GET_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: USER_GET_DATA.FAIL_USER_GET_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}


export function ViewUsersData(userId) {
    return async function (dispatch) {
        dispatch({ type: USER_VIEW_DATA.REQ_USER_DATA })
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


export function DeleteUsersData(userId) {
    return async function (dispatch) {
        console.log("Action delete ", userId)
        dispatch({ type: USER_DELETE_DATA.REQ_USER_DATA })
        try {
            const res = await userAPI.deleteUsers(userId);
            // const res = await axios.delete(`http://localhost:3030/mediaapp/deletepost/${postid}`);
            console.log("Get Delete data Res value ", res)

            if (res.ResponseStatus === 200) {

                dispatch({
                    type: USER_DELETE_DATA.SUCCESS_USER_DELETE_DATA,
                    payload: "Delete Done"
                })
                console.log("Get user data Data value ", res.data)
                console.log("Get user data Data data value ", res.data.data)
            }

            if (res.ResponseStatus === 400) {
                const { message } = res.data;
                dispatch({
                    type: USER_DELETE_DATA.FAIL_USER_DELETE_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: USER_DELETE_DATA.FAIL_USER_DELETE_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}




export function PutUsersData(userId, userData) {
    return async function (dispatch) {
        console.log("Action put ", userId)
        dispatch({ type: USER_PUT_DATA.REQ_USER_DATA })
        try {
            const res = await userAPI.putUsers(userId, userData);
            // const res = await axios.put(`http://localhost:3030/mediaapp/putpost/${postid.id}`, postdata);
            console.log("edit put data Res value ", res)

            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: USER_PUT_DATA.SUCCESS_USER_PUT_DATA,
                    payload: data
                })
                console.log("Get user data Data value ", res.data)
                console.log("Get user data Data data value ", res.data.data)
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
            console.log("Get UserProfile data Res value ", res)
            console.log("Get UserProfile data Res.Result value ", res.Result)

            if (res.ResponseStatus === 200) {
                const { data } = res.Result;
                dispatch({
                    type: USER_ID_DATA.SUCCESS_USER_ID_DATA,
                    payload: data
                })
                console.log("Get user data Data value ", data)
                console.log("Get user data Data data value ", res.data.data)
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