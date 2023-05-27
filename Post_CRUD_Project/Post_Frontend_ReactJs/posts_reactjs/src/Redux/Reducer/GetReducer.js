import {  PostsDatatype } from "../Action/ActionType"

const initialState = {
    PostsData: [],
    loading: false,
    error: null
}

export const GetReducers = (state = initialState, action) => {

    switch (action.type) {

        case PostsDatatype.REQ_POST_DATA:
            return { ...state, loading: true }

        case PostsDatatype.SUCCESS_POST_DATA:
            console.log("reducer action ", action)
            console.log("reducer action payload ", action.payload)
            console.log("getdata", state.PostsData)
            return { ...state, PostsData: action.payload, loading: false, error: null }

        case PostsDatatype.FAIL_POST_DATA:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }

}
