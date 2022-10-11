import React from 'react';
import style from './Dialog.module.css'

type DialogType={
    dialog:Array<Mtype>
    name:Array<NameType>
}

type Mtype={

    message:string
    id:string

}
type NameType={
    name:string
    id:string

}

const Dialogs = (props:DialogType) => {


    return (
        <div className={style.container} >
<div className={style.name}>
            {props.name.map((e)=>{
                return (
                    <div >
                        {e.name}

                    </div>
                )
            })}
</div>
            <div className={style.message}>
               {props.dialog.map((e)=>{
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