import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { UserReducer } from "./User/reducer";

const middleware =  ({ dispatch }) => next => action => {
                if (typeof action === 'function') {
                    return action(dispatch)
                }
                next();
 }

export const Store = createStore(UserReducer, applyMiddleware(middleware));