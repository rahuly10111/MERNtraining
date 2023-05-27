import { DataReducers } from "./DataReducers";
import { UserDataReducers } from "./UserDataReducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    apiData: DataReducers,
    userData: UserDataReducers
})
