import { PostsPutData } from "../Action/ActionType"

const initialState = {
    PostsData: [],
    loading: false,
    error: null
}

export const PutReducers = (state = initialState, action) => {

    switch (action.type) {

        case PostsPutData.REQ_POST_PUT_DATA:
            return { ...state, loading: true }

        case PostsPutData.SUCCESS_POST_PUT_DATA:
            return { ...state, PostsData: action.payload, loading: false, error: null }

        case PostsPutData.FAIL_POST_PUT_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
