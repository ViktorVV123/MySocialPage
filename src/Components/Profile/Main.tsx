import React from 'react';
import style from './Main.module.css'
import AllPost from "./AllPost";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hook/PostsTypeSelector";
import {useDispatch} from "react-redux";
import {
    createtitleReducer2AC,
    createtitleReducer3AC, createtitleReducer4AC, createtitleReducer5AC,
    createtitleReducerAC
} from "../../store/Reducer/CreateTitleReducer";
import {CreateTitle} from "../CreateProfile/createTitle/createTitle";


type MainType = {

    deletePost: (id: string) => void
    addNewPost: (text: string) => void
    Counter: (id: string, like: number) => void
}

const Main = (props: MainType) => {

    const {title1,title2,title3,title4,title5} = useAppSelector(state => state.create);

    const dispatch = useDispatch()

    return (
        <div>
            <div className={style.mainContainer}>
                <div className={style.padding}>
                <div className={style.photo}>photo

                </div>

                    <div><NavLink className={style.green} to={'/CreateProfile/'}>Create Profile</NavLink></div>
                </div>
                <div>
                    <div className={style.profileInfo}>
                        <div>
                            <ul>Подробная информация:
                                <p className={style.textInfo}>Front-end Developer (React/Redux/TypeScript)</p>
                              <div className={style.warning}> ( !!Нажми два раза чтобы отредакитровать имя,проживание и тд!!)</div>
                            </ul>
                            <ul>Имя:
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
                    <AllPost deletePost={props.deletePost} addNewPost={props.addNewPost}
                             Counter={props.Counter}/>
                </div>
            </div>
        </div>
    );
};

export default Main;