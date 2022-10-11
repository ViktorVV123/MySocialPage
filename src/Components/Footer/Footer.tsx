import React from 'react';
import style from './Footer.module.css'
import vkIcon from '../../image/vk3.jpg'
import telegramIcon from '../../image/tt.png'




export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <h2 className={style.title}>Victor Vlasjuk</h2>
{/*
                <div className={style.socialBlock}>
                    <div className={style.socialIcon}><a target="_blank" href="https://t.me/gga123321"><img src={telegramIcon} alt=""/></a></div>
                    <div className={style.socialIcon}><a target="_blank" href="https://vk.com/gans553"><img src={vkIcon} alt=""/></a></div>


                </div>*/}
                <span className={style.copyRight}>© 2022 All Rights Reserved.</span>
            </div>
        </div>
    );
};