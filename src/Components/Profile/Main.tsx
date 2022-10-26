import React from 'react';
import style from './Main.module.css'
import AllPost from "./AllPost";

type MainType = {
    post: Array<PostType>
    deletePost: (id: string) => void
    addNewPost: (text: string) => void
    Counter: (id: string, like: number) => void
}
type PostType = {
    id: string
    text: string
    like: number
}
const Main = (props: MainType) => {
    return (
        <div>
            <div className={style.mainContainer}>
                <div className={style.photo}>photo</div>
                <div>
                    <div className={style.profileInfo}>
                        <div>
                            <ul>Подробная информация:
                                <p className={style.textInfo}>Front-end Developer (React/Redux/TypeScript)</p>
                            </ul>
                            <ul>Имя
                                <p className={style.textInfo}>Victor Vlasjuk</p></ul>
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
                    <AllPost post={props.post} deletePost={props.deletePost} addNewPost={props.addNewPost}
                             Counter={props.Counter}/>
                </div>
            </div>
        </div>
    );
};

export default Main;