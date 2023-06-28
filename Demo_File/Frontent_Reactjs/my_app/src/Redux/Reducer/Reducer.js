
import { combineReducers } from "redux";
import { stockDataReducer } from "./stockDataReducer";

export const rootReducer = combineReducers({
    stockData: stockDataReducer,

});
