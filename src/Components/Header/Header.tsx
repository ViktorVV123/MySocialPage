import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, Route} from "react-router-dom";
import {SideBar} from "../SideBar/SideBar";




export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <SideBar/>
                <Nav className="ml-auto" style={{color: 'white'}}>

                </Nav>

            </Container>
        </Navbar>
    );
};