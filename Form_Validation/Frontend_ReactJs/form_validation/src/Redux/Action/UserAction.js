
import { userAPI } from "../../ApiGateWay/apiHandler/controllers";
import { USER_REG_DATA } from "./ActionType";


export function UserDetails(userdata) {
    console.log("fdesdsdfsfdirst",userdata)
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


