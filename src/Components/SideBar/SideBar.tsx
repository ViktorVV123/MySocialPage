
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './SideBar.module.css';
import {Button, Offcanvas} from "react-bootstrap";

export const SideBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-secondary" style={{color: 'white'}}
                    className='m-1' onClick={handleShow}>
                Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose} className={style.all}>
                <Offcanvas.Header className={style.buttonMenu} closeButton>

                    <Offcanvas.Title   >Menu</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body className={style.all}>

                    <div className={style.buttonMenu} ><NavLink to={'/'}>Profile</NavLink></div>
                    <div className={style.buttonMenu} ><NavLink to={'/dialogs'}>Message</NavLink></div>
                    <div className={style.buttonMenu} ><NavLink to={'/news'}>News</NavLink></div>
                    <div className={style.buttonMenu} ><NavLink to={'/music'}>Music</NavLink></div>
                    <div className={style.buttonMenu} ><NavLink to={'/sittings'}>Sittings</NavLink></div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
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