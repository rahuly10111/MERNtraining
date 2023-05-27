import { Datatype } from "../Action/ActionType"

const initialState = {
    PostsData: [],
    loading: false,
    error: null
}

export const PostReducers = (state = initialState, action) => {

    switch (action.type) {

        case Datatype.REQ_DATA:
            return { ...state, loading: true }

        case Datatype.SUCCESS_DATA:
            return { ...state, PostsData: action.payload, loading: false, error: null }

        case Datatype.FAIL_DATA:
            return { ...state, loading: false, error: action.payload }


        default:
            return state;
    }

}
