import { PostReducers } from "./PostReducer";
import { combineReducers } from "redux";
import { GetReducers } from "./GetReducer";
import { GetIdReducers } from "./GetIdReducer";
import { DeleteReducers } from "./DeleteReducer";
import { PutReducers } from "./PutReducer";
import { UserRegReducers } from "./RegistrationUserReducer";
import { UserLoginReducers } from "./LoginReducer";
import { GetUserReducers } from "./GetUserReducer";
import { ProfileReducers } from "./ProfileReducer";
import { ViewUserReducers } from "./ViewReducer";
import { PutUserReducers } from "./PutUserReducer";

export const rootReducer = combineReducers({
    postData: PostReducers,
    getData: GetReducers,
    getIddata: GetIdReducers,
    deleteData: DeleteReducers,
    putData: PutReducers,
    userRegistration: UserRegReducers,
    userLogin: UserLoginReducers,
    getUserDetails: GetUserReducers,
    profileDetails:ProfileReducers,
    viewUser:ViewUserReducers,
    putUser:PutUserReducers
})
