import { PostsDeleteDatatype } from "../Action/ActionType"

const initialState = {
    PostsData: [],
    loading: false,
    error: null
}

export const DeleteReducers = (state = initialState, action) => {

    switch (action.type) {

        case PostsDeleteDatatype.REQ_POST_DELETE_DATA:
            return { ...state, loading: true }

        case PostsDeleteDatatype.SUCCESS_POST_DELETE_DATA:
            return { ...state, PostsData: action.payload, loading: false, error: null }

        case PostsDeleteDatatype.FAIL_POST_DELETE_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;

    }

}
