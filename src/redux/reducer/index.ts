import { combineReducers } from "redux";
import {characterReducer} from "./charactersReducer";

export default combineReducers({
 characterReducer,
});

export type Store = ReturnType<any>;