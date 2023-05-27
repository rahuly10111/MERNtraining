import { getDataApi, getUserDataApi } from "../../ApiGateWay";
import { Datatype, UserDatatype } from "../ActionType";

export function GetData() {
    return async function (dispatch) {
        dispatch({ type: Datatype.REQ_DATA })
        const res = await getDataApi;
        console.log("getdata Res value ", res);
        console.log("getdata res.data value ", res.data);
        const { data } = res;
        setTimeout(() => {
            if (res.status === 200) {

                dispatch({
                    type: Datatype.SUCCESS_DATA,
                    payload: { data },
                })
            }
        }, 2000)




        if (res.status === 400) {
            const { error } = res.data;
            setTimeout(dispatch({
                type: Datatype.FAIL_DATA,
                payload: { error },
            }), 100000);


        }
    }

};



export function GetUserData() {
    return async function (dispatch) {
        dispatch({ type: UserDatatype.REQ_USER_DATA })
        const res = await getUserDataApi;
        console.log("Get user data Res value ", res)

        if (res.status === 200) {
            const { data, message } = res.data;
            dispatch({
                type: UserDatatype.SUCCESS_USER_DATA,
                payload: { data, message }
            })
            console.log("Get user data Data value ", res.data.data)
            console.log("Get user data Message value ", res.data.message)
        }

        if (res.status === 400) {
            const { message } = res.data;
            dispatch({
                type: UserDatatype.FAIL_USER_DATA,
                payload: { message }
            })
        }

    }
}