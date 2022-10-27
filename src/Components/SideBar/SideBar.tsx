
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBar.module.css';
import {Button, Offcanvas} from "react-bootstrap";

export const SideBar = () => {



    return (
        <div className={style.paddingBar}>
            <div><NavLink className={style.boton1} to={'/MySocialPage/'}>Profile</NavLink></div>
            <div><NavLink className={style.boton1} to={'/dialogs'}>Message</NavLink></div>
            <div><NavLink className={style.boton1} to={'/news'}>News</NavLink></div>
            <div><NavLink className={style.boton1} to={'/music'}>Music</NavLink></div>
            <div><NavLink className={style.boton1} to={'/sittings'}>Sittings</NavLink></div>

        </div>
    );


};













// import React from 'react';
// import style from './SideBar.module.css'
//
// const SideBar = () => {
//     return (
//         <div className={style.nav}>
//             <div className={style.sideBar}>
//                 <div className={style.sideBarTwo}>
//            <a href='#'> Profile</a>
//            <a href='#'> Message</a>
//            <a href='#'> new</a>
//            <a href='#'> Music</a>
//            <a href='#'> Sittings</a>
//            <a href='#'> Sittings</a>
//            <a href='#'> Sittings</a>
//            <a href='#'> Sittings</a>
//            <a href='#'> Sittings</a>
//                 </div>
//             </div>
//
//
//
//
//             Sittings
//             </div>
//     );
// };
//
// export default SideBar;