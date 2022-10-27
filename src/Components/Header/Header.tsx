import React from 'react';
import style from './Header.module.css'
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, Route} from "react-router-dom";
import {SideBar} from "../SideBar/SideBar";


export const Header = () => {
    return (
      /*  <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="ml-auto" style={{color: 'white'}}>
                    <SideBar/>
                </Nav>

            </Container>
        </Navbar>*/
        <div className={style.header}>
            <SideBar/>
        </div>
    );
};