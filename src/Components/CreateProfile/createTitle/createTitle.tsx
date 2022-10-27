import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";
import {useAppSelector} from "../../../hook/PostsTypeSelector";
import {useDispatch} from "react-redux";

type CreateTitlePropsType={
    value: any
    onChange: (text:string) => void

}


export const CreateTitle =(props: CreateTitlePropsType) =>{

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>

}