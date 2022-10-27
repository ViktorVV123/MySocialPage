import {useState} from "react";
import {v1} from "uuid";
import {allFETCH} from "../../allTypeHere/dialogType";



type title1 = {
    id: string
   title1: string
}
type title2 = {
    id: string
    title2: string
}
type title3 = {
    id: string
    title3: string
}
type title4 = {
    id: string
    title4: string
}
type title5 = {
    id: string
    title5: string
}


type initialStateDialogType = {
    title1:Array<title1>
    title2:Array<title2>
    title3:Array<title3>
    title4:Array<title4>
    title5:Array<title5>


}

const initialStateDialog: initialStateDialogType = {


    title1: [

        {id: v1(), title1: 'Valsjuk Victor'},

    ],
    title2: [
        {id: v1(), title2: 'Moscow'},

    ],
    title3: [
        {id: v1(), title3: '29.09.1994'},

    ],
    title4: [
        {id: v1(), title4: 'IT-INCUBATOR'},

    ],
    title5: [
        {id: v1(), title5: '+7(926)151-48-31'},

    ],



}
type czarType = ReturnType<typeof createtitleReducerAC>


export const createtitleReducer = (state = initialStateDialog, action: czarType): initialStateDialogType => {
    switch (action.type) {
        case 'CREATE_TITLE':
       return  {
        ...state, title1:
            state.title1.map(el => el.id === action.id ? {...el, title1: action.title} : el)
        }
        default:
            return state
    }

}

export const createtitleReducerAC = (title:string,id:string) => ({type: 'CREATE_TITLE',title,id} as const);