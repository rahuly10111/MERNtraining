import { Datatype } from '../ActionType'

const initialState = {
    getData: [],
    loading: false,
    error: null
}

export const DataReducers = (state = initialState, action) => {

    switch (action.type) {

        case Datatype.REQ_DATA:
            // console.log(" Reducer Data State ", state)
            // console.log(" Reducer Data Action ", action)
            return { ...state, loading: true }

        case Datatype.SUCCESS_DATA:
            console.log(" Reducer Success Data Action ", action)
            console.log(" Reducer Success Data Action-payload ", action.payload)
            console.log(" Reducer Success Data Action-payload-data ", action.payload.data)
            return { ...state, getData: action.payload.data, loading: false, error: null }

        case Datatype.FAIL_DATA:
            console.log(" Reducer Data Action ", action)
            return { ...state, loading: false, error: action.payload.error }

        default:
            return state;
    }

}
