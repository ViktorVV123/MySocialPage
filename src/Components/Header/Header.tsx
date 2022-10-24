import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, Route} from "react-router-dom";





export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="ml-auto" style={{color: 'white'}}>

                </Nav>

            </Container>
        </Navbar>
    );
};