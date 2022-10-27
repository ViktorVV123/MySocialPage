import React from 'react';
import  './Main.css'
import {NavLink, Route, Routes} from "react-router-dom";
import vv from '../../image/vv2.jpg'
import {Information} from "./Information/Information";
import AllPost from "./Post/AllPost";
import {SideBar} from "../SideBar/SideBar";



type MainType = {

    deletePost: (id: string) => void
    addNewPost: (text: string) => void
    Counter: (id: string, like: number) => void
}

const Main = (props: MainType) => {


    return (
        <div className={'containerMain'}>
            <div className={'container'}>
                <div className={'double'}>
                        <img className={'photo'} src={vv}/>
                    <div className={'btw1'}><NavLink style={{color:'white'}}  to={'/CreateProfile/'}><div style={{color:'white', margin:'10px'}} >Create Profile</div></NavLink></div>
                    </div>
                <div>
                    <Information/>


                </div>
                <div><AllPost deletePost={props.deletePost} addNewPost={props.addNewPost}
                              Counter={props.Counter}/></div>
            </div>
        </div>

    );
};

export default Main;