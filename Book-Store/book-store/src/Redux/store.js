import {createStore,applyMiddleware} from "redux";
import { BookReducer } from "./Reducer";
import thunk from "redux-thunk";



export const Store=createStore(BookReducer,applyMiddleware(thunk));
