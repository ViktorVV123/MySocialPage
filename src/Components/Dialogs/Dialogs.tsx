import React from 'react';
import style from './Dialog.module.css'
import {useAppSelector} from "../../hook/PostsTypeSelector";
import {useDispatch} from "react-redux";
import {SideBar} from "../SideBar/SideBar";



const Dialogs = () => {
    const {dialog,name} = useAppSelector(state => state.dialog);
    const dispatch = useDispatch();

    return (
        <div className={'container'} >
            <SideBar/>
<div className={style.name}>
            {name.map((e)=>{
                return (
                    <div >
                        {e.name}

                    </div>
                )
            })}
</div>
            <div className={style.message}>
               {dialog.map((e)=>{
                   return(
                       <div key={e.id} >

                          <div >{e.message}</div>


                       </div>
                   )
               })}
            </div>
            </div>
    );
};

export default Dialogs;