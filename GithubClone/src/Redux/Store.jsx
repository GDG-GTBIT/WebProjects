import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { GithubReducer } from "./Reducer";


export const Store = createStore(GithubReducer,applyMiddleware(thunk));