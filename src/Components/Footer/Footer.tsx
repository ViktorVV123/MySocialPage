import React from 'react';
import style from './Footer.module.css'





export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <span className={style.copyRight}>Victor Vlasjuk</span>
                <span className={style.copyRight}>© 2022 All Rights Reserved.</span>
            </div>
        </div>
    );
};