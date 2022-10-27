/*
import {v1} from "uuid";

import Ross from "../assets/images/Ross.jpg"
import Monica from "../assets/images/Monica.jpg"
import Rachel from "../assets/images/Rachel.jpg"
import Fibby from "../assets/images/Phibby.jpg"
import Joey from "../assets/images/Joey.jpg"

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const changeNewMessageAC = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        newMessageText: newMessageText
    } as const
}

export type DialogsActionsTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageAC>

type MessageType = {
    id: string
    message: string
}

type InitialStateType = {
    messages: Array<MessageType>
    newDialogMessage: string
}

let initialState: InitialStateType = {

    newDialogMessage: '',
    messages: [
        {id: v1(), message: 'Hi,Monica!'},
        {id: v1(), message: 'Glad to see you, Ross!'},
        {id: v1(), message: 'Rachel, do you want to chat?'},
        {id: v1(), message: 'Fibby, are you free now?'},
        {id: v1(), message: 'Joey, good joke'}
    ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: v1(), message: state.newDialogMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newDialogMessage: ''
            }
        case 'CHANGE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newDialogMessage: action.newMessageText
            }
        default:
            return state
    }
}*/

import {v1} from "uuid";
import {allFETCH, initialStateType, PostActionType} from "../../allTypeHere/dialogType";


const initialState: initialStateType = {
    posts: [
        {id: v1(), text: 'Lorem ipsum et sed rutrum congue quisque auctor: adipiscing eu fusce ultricies auctor at sed at commodo massa amet eros, curabitur, duis. Urna et justo odio ultricies, donec,', like: 100},
        {id: v1(), text: 'Malesuada lectus quisque malesuada diam: metus sodales: eget mattis ipsum. Quam curabitur at gravida orci fusce in a non magna nulla', like: 23},
        {id: v1(), text: 'Nec nulla donec ornare ut diam urna at pharetra pellentesque fusce: urna pellentesque sagittis ipsum', like: 2},
        {id: v1(), text: 'Sit sapien gravida molestie diam nec risus gravida in mattis fusce et adipiscing pharetra diam vivamus sem eget.', like: 5},
        {id: v1(), text: 'Metus quisque magna leo: amet duis risus: donec quisque gravida: lectus — nulla risus ipsum risus. In metus ', like: 0}]

}

export type PostAType =PostActionType | ReturnType<typeof AddPostAC> | ReturnType<typeof DeletePostAC> | ReturnType<typeof CounterLikeAC>

export const AddPostAC = (text:string,like:number) => ({type: allFETCH.ADD_POST,text,like} as const);
export const DeletePostAC = (id:string) => ({type: allFETCH.DELETE_POST,id} as const);
export const CounterLikeAC = (id:string, like: number) => ({type: allFETCH.COUNTER_LIKE,id,like} as const);


export const postReducer = (state=initialState, action: PostAType):initialStateType => {
    switch (action.type){
        case allFETCH.ADD_POST:

            const newPost = {id: v1(), text: action.text, like: action.like}
            return {...state,posts:[newPost,...state.posts]};

        case  allFETCH.DELETE_POST:
            return {...state, posts: state.posts.filter(e => e.id !== action.id)}
        case allFETCH.COUNTER_LIKE:
            return { ...state, posts: state.posts.map( e => e.id === action.id ? {...e, like:action.like + 1}: e)}
//  setPost(post.map(e => e.id === id ? { ...e, like:like + 1}:e))
        default:
            return state
    }
}
