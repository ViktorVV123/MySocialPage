import {useState} from "react";
import {v1} from "uuid";


type dialogType = {
    id: string
    message: string
}
type nameType={
    name:string
    id:string
}

type initialStateDialogType = {
    dialog: Array<dialogType>
    name:Array<nameType>
}

const initialStateDialog: initialStateDialogType = {


        dialog: [

            {id: v1(), message: 'Hello Viktor'},
            {id: v1(), message: 'How are you bro'},
            {id: v1(), message: 'Are you go to walking?'},
            {id: v1(), message: 'Nice to meet you my dear friends'},
        ],
        name: [
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Nikita'},
            {id: v1(), name: 'Igor'},
        ]

}


export const dialogsReducer = (state = initialStateDialog, action: any): initialStateDialogType => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }

}