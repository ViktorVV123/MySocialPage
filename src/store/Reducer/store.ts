import {v1} from "uuid";



    /*/!**!/

      name : [
            {id:v1(),name:'Dima'},
            {id:v1(),name:'Andrey'},
            {id:v1(),name:'Nikita'},
            {id:v1(),name:'Igor'},
        ],
        dialog : [
            {id:v1(), message:'Hello Viktor'},
            {id:v1(), message:'How are you bro'},
            {id:v1(), message:'Are you go to walking?'},
            {id:v1(), message:'Nice to meet you my dear friends'},
        ],
        post : [
            {id:v1(),text:'hello people',like:'23'},
            {id:v1(),text:'hello a go walking',like:'2'},
            {id:v1(),text:'what happen',like:'5'},
            {id:v1(),text:'my new page, i want my block and send picture in my live',like:'0'}]
    }*/


import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {postReducer} from "./postReducer";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
post: postReducer,

    //write reducer here
})

export type RootState = ReturnType<typeof rootReducer>

export const store =legacy_createStore (rootReducer, applyMiddleware(thunk))