import { combineReducers } from "redux";
import productReducer from "./products/reducer";

const rootReducer = combineReducers({
    product: productReducer
})

export default rootReducer;