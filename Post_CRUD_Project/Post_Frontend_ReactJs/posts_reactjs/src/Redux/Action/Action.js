import { Datatype, PostsDatatype, PostsDeleteDatatype, PostsGetPostId, PostsPutData } from "./ActionType";
import axios from "axios";

export function AddPostData(postdata) {
    return async function (dispatch) {
        dispatch({ type: Datatype.REQ_DATA })
        try {
            console.log("post data get in action", postdata)
            const res = await axios.post("http://localhost:3030/mediaapp/postpost", postdata);
            if (res.status === 200) {
                dispatch({
                    type: Datatype.SUCCESS_DATA,
                    payload: "Done",
                })
                console.log("done ")
            }

            if (res.status === 400) {
                const { error } = res.data;
                dispatch({
                    type: Datatype.FAIL_DATA,
                    payload: { error },
                })
            }
        } catch (error) {
            dispatch({
                type: Datatype.FAIL_DATA,
                payload: { error: 'An error occurred while Adding Data' },
            });
        }
    }

}



export function GetPostsData() {
    return async function (dispatch) {
        dispatch({ type: PostsDatatype.REQ_POST_DATA })
        try {
            const res = await axios.get("http://localhost:3030/mediaapp/getpost");
            console.log("Get post data Res value ", res)

            if (res.status === 200) {
                const { data } = res.data;
                dispatch({
                    type: PostsDatatype.SUCCESS_POST_DATA,
                    payload: data
                })
                console.log("Get user data Data value ", res.data)
                console.log("Get user data Data data value ", res.data.data)
            }

            if (res.status === 400) {
                const { message } = res.data;
                dispatch({
                    type: PostsDatatype.FAIL_POST_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: PostsDatatype.FAIL_POST_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}


export function DeletePostsData(postid) {
    return async function (dispatch) {
        console.log("Action delete ", postid)
        dispatch({ type: PostsDeleteDatatype.REQ_POST_DELETE_DATA })
        try {
            const res = await axios.delete(`http://localhost:3030/mediaapp/deletepost/${postid}`);
            console.log("Get Delete data Res value ", res)

            if (res.status === 200) {

                dispatch({
                    type: PostsDeleteDatatype.SUCCESS_POST_DELETE_DATA,
                    payload: "Delete Done"
                })
                console.log("Get user data Data value ", res.data)
                console.log("Get user data Data data value ", res.data.data)
            }

            if (res.status === 400) {
                const { message } = res.data;
                dispatch({
                    type: PostsDeleteDatatype.FAIL_POST_DELETE_DATA,
                    payload: { message }
                })
            }


        } catch (error) {
            dispatch({
                type: PostsDeleteDatatype.FAIL_POST_DELETE_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}



export function getPostsIdData(postid) {
    return async function (dispatch) {
        console.log("Action post data  ", postid)
        dispatch({ type: PostsGetPostId.REQ_POST_ID_DATA })
        try {
            const res = await axios.get(`http://localhost:3030/mediaapp/getpostbyid/${postid.id}`);
            console.log("Get post data by id  Res value ", res)

            if (res.status === 200) {
                dispatch({
                    type: PostsGetPostId.SUCCESS_POST_ID_DATA,
                    payload: res.data
                })
                console.log("Get user data by id  Data value ", res.data)
                // console.log("Get user data by id  data value ", res.data.data)
            }

            if (res.status === 400) {
                const { message } = res.data;
                dispatch({
                    type: PostsGetPostId.FAIL_POST_ID_DATA,
                    payload: { message }
                })
            }
        } catch (error) {
            dispatch({
                type: PostsGetPostId.FAIL_POST_ID_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}




export function PutPostsData(postid) {
    return async function (dispatch) {
        console.log("Action put ", postid)
        dispatch({ type: PostsPutData.REQ_POST_PUT_DATA })
        try {
            const res = await axios.put(`http://localhost:3030/mediaapp/putpost/${postid.id}`);
            console.log("Get put data Res value ", res)

            if (res.status === 200) {

                dispatch({
                    type: PostsPutData.SUCCESS_POST_PUT_DATA,
                    payload: res.data
                })
                console.log("Get user data Data value ", res.data)
                console.log("Get user data Data data value ", res.data.data)
            }

            if (res.status === 400) {
                const { message } = res.data;
                dispatch({
                    type: PostsPutData.FAIL_POST_PUT_DATA,
                    payload: { message }
                })
            }


        } catch (error) {
            dispatch({
                type: PostsPutData.FAIL_POST_PUT_DATA,
                payload: { error: 'An error occurred while Getting Data' },
            });
        }

    }
}