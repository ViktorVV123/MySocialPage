import React from 'react';
import style from './Main.module.css'
import AllPost from "./AllPost";

type MainType={
    post:Array<PostType>
    deletePost: (id:string) => void
    addNewPost:(text:string)=>void
    Counter:(id :string, like:number)=>void


}


type PostType={
    id:string
    text:string
    like:number
}


const Main = (props:MainType) => {


    return (


        <div>
            <div className={style.mainContainer}>
                <div className={style.photo}>photo</div>
                <div>
                    <div className={style.profileInfo}>
                        <div>
                            <div>Подробная информация</div>
                            <div>Имя</div>
                            <div>Место проживаиня</div>
                            <div>дата рождения</div>
                            <div>Образование</div>
                            <div>сайты</div>
                            <div>моб телефон</div>


                        </div>
                    </div>

                    <AllPost post={props.post} deletePost={props.deletePost} addNewPost={props.addNewPost} Counter={props.Counter}/>
                </div>
            </div>
        </div>


    );
};

export default Main;