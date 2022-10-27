import React from 'react';

import {CreateTitle} from "./createTitle/createTitle";
import {useAppSelector} from "../../hook/PostsTypeSelector";
import {useDispatch} from "react-redux";
import {
    createtitleReducer2AC,
    createtitleReducer3AC, createtitleReducer4AC, createtitleReducer5AC,
    createtitleReducerAC
} from "../../store/Reducer/CreateTitleReducer";

type CreateType={
    title1:Array<titleType>
    changeHandlerT:(id:string,text:string)=>void
}
type titleType={
    id:string
    title: string
}
export const CreateProfile = () => {
    const {title1,title2,title3,title4,title5} = useAppSelector(state => state.create);

    const dispatch = useDispatch()

    return (


                    <div>
                        <div >
                            <div>
                                <ul>Подробная информация:
                                    <p >Front-end Developer (React/Redux/TypeScript)</p>
                                    (!!двойное нажатие для редактирования)
                                </ul>
                                <ul>Имя
                                    <p  > {title1.map((e)=>{
                                        const crateTitle = (title:string,id:string) => {
                                            dispatch(createtitleReducerAC(title,id))
                                        }
                                        return(
                                            <div key={e.id}>

                                                <CreateTitle value={e.title1} onChange={(text)=>crateTitle(text,e.id)}/>
                                            </div>
                                        )
                                    })}</p>

                                </ul>
                                <ul >Место проживаиня:
                                    <p  > {title2.map((t)=>{

                                        const crateTitle = (title:string,id:string) => {
                                            dispatch(createtitleReducer2AC(title,id))
                                        }
                                        return(
                                            <div key={t.id}>

                                                <CreateTitle value={t.title2} onChange={(text)=>crateTitle(text,t.id)}/>
                                            </div>
                                        )
                                    })}</p>
                                </ul>
                                <ul>дата рождения:
                                    <p  >{title3.map((d)=>{
                                        const crateTitle = (title:string,id:string) => {
                                            dispatch(createtitleReducer3AC(title,id))
                                        }
                                        return(
                                            <div key={d.id}>
                                                <CreateTitle value={d.title3} onChange={(text)=>crateTitle(text,d.id)}/>
                                            </div>
                                        )
                                    })}</p>
                                </ul>
                                <ul>Образование:
                                    <p >{title4.map((d)=>{
                                        const crateTitle = (title:string,id:string) => {
                                            dispatch(createtitleReducer4AC(title,id))
                                        }
                                        return(
                                            <div key={d.id}>
                                                <CreateTitle value={d.title4} onChange={(text)=>crateTitle(text,d.id)}/>
                                            </div>
                                        )
                                    })}</p>
                                </ul>
                                <ul>сайты:
                                    <div>
                                        <a   href="https://github.com/ViktorVV123">Github</a>
                                    </div>

                                </ul>
                                <ul>моб телефон:
                                    <p >{title5.map((d)=>{
                                        const crateTitle = (title:string,id:string) => {
                                            dispatch(createtitleReducer5AC(title,id))
                                        }
                                        return(
                                            <div key={d.id}>
                                                <CreateTitle value={d.title5} onChange={(text)=>crateTitle(text,d.id)}/>
                                            </div>
                                        )
                                    })}</p>
                                </ul>
                            </div>
                        </div>
            </div>

    );
};

