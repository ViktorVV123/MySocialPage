import React from 'react';
import style from "../Profile/Main.module.css";
import {NavLink} from "react-router-dom";
import AllPost from "../Profile/AllPost";
import {CreateTitle} from "./createTitle/createTitle";
import {useAppSelector} from "../../hook/PostsTypeSelector";
import {useDispatch} from "react-redux";
import {CounterLikeAC} from "../../store/Reducer/postReducer";
import {createtitleReducerAC} from "../../store/Reducer/CreateTitleReducer";



export const CreateProfile = () => {

    const {title1,title2,title3,title4,title5} = useAppSelector(state => state.create);
    const dispatch = useDispatch();

    const crateTitle = (title:string,id:string) => {
        dispatch(createtitleReducerAC(title,id))
    }
    return (


                    <div className={style.ContainerCreateProfile}>
                        <div className={style.profileInfo}>
                            <div>
                                <ul>Подробная информация:
                                    <p className={style.textInfo}>Front-end Developer (React/Redux/TypeScript)</p>
                                    (!!двойное нажатие для редактирования)
                                </ul>
                                <ul>Имя
                                    <p className={style.textInfo}>{title1.map((e)=>{
                                        return(
                                            <div><CreateTitle onChange={(title)=>crateTitle(e.title1,e.id)} value={e.title1}/></div>
                                        )
                                    })}</p></ul>
                                <ul>Место проживаиня:
                                    <p className={style.textInfo}> Moscow</p>
                                </ul>
                                <ul>дата рождения:
                                    <p className={style.textInfo}>29.09.1994</p>
                                </ul>
                                <ul>Образование:
                                    <p className={style.textInfo}>IT-INCUBATOR</p>
                                </ul>
                                <ul>сайты:
                                    <div>
                                        <a  className={style.textInfo} href="https://github.com/ViktorVV123">Github</a>
                                    </div>

                                </ul>
                                <ul>моб телефон:
                                    <p className={style.textInfo} >+7(926)151-48-31</p>
                                </ul>
                            </div>
                        </div>
            </div>

    );
};

