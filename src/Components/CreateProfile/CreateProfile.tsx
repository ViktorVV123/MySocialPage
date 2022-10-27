import React from 'react';
import style from "../Profile/Main.module.css";
import {NavLink} from "react-router-dom";
import AllPost from "../Profile/AllPost";
import {CreateTitle} from "./createTitle/createTitle";
import {useAppSelector} from "../../hook/PostsTypeSelector";
import {useDispatch} from "react-redux";
import {CounterLikeAC} from "../../store/Reducer/postReducer";
import {
    createtitleReducer2AC,
    createtitleReducer3AC, createtitleReducer4AC, createtitleReducer5AC,
    createtitleReducerAC
} from "../../store/Reducer/CreateTitleReducer";
import {v1} from "uuid";

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


                    <div className={style.ContainerCreateProfile}>
                        <div className={style.profileInfo}>
                            <div>
                                <ul>Подробная информация:
                                    <p className={style.textInfo}>Front-end Developer (React/Redux/TypeScript)</p>
                                    (!!двойное нажатие для редактирования)
                                </ul>
                                <ul>Имя
                                    <p  className={style.textInfo}> {title1.map((e)=>{
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
                                    <p  className={style.textInfo}> {title2.map((t)=>{

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
                                    <p  className={style.textInfo}>{title3.map((d)=>{
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
                                    <p  className={style.textInfo}>{title4.map((d)=>{
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
                                        <a  className={style.textInfo} href="https://github.com/ViktorVV123">Github</a>
                                    </div>

                                </ul>
                                <ul>моб телефон:
                                    <p  className={style.textInfo}>{title5.map((d)=>{
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

