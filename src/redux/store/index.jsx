import { combineReducers, createStore } from "redux";
import CartReducer from "../reducers/Cart.reducer";

const reducers = combineReducers({
    basket: CartReducer
    
})
export const globalState = createStore(reducers)