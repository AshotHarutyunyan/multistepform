import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { FormReducer } from "./FormReducer";

let reducers = combineReducers({
    form: FormReducer,
})

let Store = createStore(reducers,applyMiddleware(thunk));

window.store = Store;

export default Store;