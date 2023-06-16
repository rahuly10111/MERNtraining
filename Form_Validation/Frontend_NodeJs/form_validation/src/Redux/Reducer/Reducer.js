
import { combineReducers } from "redux";
import { UserRegReducers } from "./RegistrationUserReducer";


export const rootReducer = combineReducers({
    userRegistration: UserRegReducers,
   
})
