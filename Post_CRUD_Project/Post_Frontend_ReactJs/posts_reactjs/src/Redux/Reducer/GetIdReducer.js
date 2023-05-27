import {  PostsGetPostId } from "../Action/ActionType"

const initialState = {
    PostsData: [],
    loading: false,
    error: null
}

export const GetIdReducers = (state = initialState, action) => {

    switch (action.type) {

        case PostsGetPostId.REQ_POST_ID_DATA:
            return { ...state, loading: true }

        case PostsGetPostId.SUCCESS_POST_ID_DATA:
            return { ...state, PostsData: action.payload, loading: false, error: null }

        case PostsGetPostId.FAIL_POST_ID_DATA:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }

}
