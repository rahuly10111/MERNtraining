
import { combineReducers } from "redux";
import { UserRegReducers } from "./RegistrationUserReducer";
import { UserLoginReducers } from "./LoginReducer";
import { ProfileReducers } from "./ProfileReducer";
import { PutUserReducers } from "./PutUserReducer";
import { ViewUserReducers } from "./ViewUser";
import { GetSupplierReducers } from "./GetSupplierReducer";
import { GetHeaderReducers } from "./GetHeaderReducer";
import { PostSupplierReducers } from "./PostSupplierReducer";
import { GetMonthSupplierReducers } from "./GetMonthSupplierReducer";
import { GetMonthHeaderReducers } from "./GetMonthHeaderReducer";
import { PostHeaderReducers } from "./PostHeaderReducer";

export const rootReducer = combineReducers({
    userRegistration: UserRegReducers,
    userLogin: UserLoginReducers,
    profileDetails: ProfileReducers,
    putUser: PutUserReducers,
    viewUser: ViewUserReducers,
    getSupplier: GetSupplierReducers,
    getHeader: GetHeaderReducers,
    postHeader: PostSupplierReducers,
    getMonthSupplier: GetMonthSupplierReducers,
    getMonthHeader: GetMonthHeaderReducers,
    postHeaderData:PostHeaderReducers
})
