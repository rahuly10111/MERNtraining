import { PostReducers } from "./PostReducer";
import { combineReducers } from "redux";
import { GetReducers } from "./GetReducer";
import { GetIdReducers } from "./GetIdReducer";
import { DeleteReducers } from "./DeleteReducer";
import { PutReducers } from "./PutReducer";

export const rootReducer = combineReducers({
    postData: PostReducers,
    getData: GetReducers,
    getIddata: GetIdReducers,
    deleteData: DeleteReducers,
    putData:PutReducers
})
