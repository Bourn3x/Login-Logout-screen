import { createStore, combineReducers } from "redux"
import authentication from "./reducers/authentication"

const reducers = combineReducers({ authentication })

export default createStore(reducers)