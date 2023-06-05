
import { combineReducers } from "redux";
import { UserRegReducers } from "./RegistrationUserReducer";
import { UserLoginReducers } from "./LoginReducer";
import { ProfileReducers } from "./ProfileReducer";
import { PutUserReducers } from "./PutUserReducer";
import { ViewUserReducers } from "./ViewUser";

export const rootReducer = combineReducers({
    userRegistration: UserRegReducers,
    userLogin: UserLoginReducers,
    profileDetails: ProfileReducers,
    putUser: PutUserReducers,
    viewUser: ViewUserReducers
})
