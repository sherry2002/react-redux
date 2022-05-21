import { combineReducers,createStore } from "redux";
import {userReducer} from './reducer'

export const store = createStore(
    combineReducers({
        userReducer,
    })
   
    )