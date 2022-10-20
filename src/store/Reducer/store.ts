
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {postReducer} from "./postReducer";
import thunk from "redux-thunk";
import {dialogsReducer} from "./dialogReducer";


export const rootReducer = combineReducers({
post: postReducer,
dialog:dialogsReducer

    //write reducer here
})

export type RootState = ReturnType<typeof rootReducer>

export const store =legacy_createStore (rootReducer, applyMiddleware(thunk))