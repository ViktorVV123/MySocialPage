// @ts-ignore
import React from 'react';
import style from '../Music/Music.module.css'



const Music = () => {



    return (
        <div className={style.Container}>

            <div className={style.musicContainer}>
                <input className={style.music}/>
                <button className={style.music}>поиск</button>
               <div className={style.music}><audio id="audio" src="./audio/treck1.mp3" controls ></audio></div>
               <div className={style.music}><audio id="audio" src="./audio/treck1.mp3" controls ></audio></div>
               <div className={style.music}><audio id="audio" src="./audio/treck1.mp3" controls ></audio></div>
               <div className={style.music}><audio id="audio" src="./audio/treck1.mp3" controls ></audio></div>


            </div>
        </div>
    );
};

export default Music;