import React, {useState} from 'react';
import './App.css';
import Main from "./Components/Profile/Main";
import {Header} from "./Components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Sittings from "./Components/Sittings/Sittings";
import {Footer} from "./Components/Footer/Footer";
import {useDispatch} from "react-redux";
import {AddPostAC, CounterLikeAC, DeletePostAC} from "./store/Reducer/postReducer";
import {SideBar} from "./Components/SideBar/SideBar";
import {CreateProfile} from "./Components/CreateProfile/CreateProfile";





function App() {

    const dispatch = useDispatch()





    const deletePost = (id:string) => {
        dispatch(DeletePostAC(id))

    }


    const addNewPost = (text:string) => {
        dispatch(AddPostAC(text,0));

    }
const Counter = (id :string, like:number)=>{
        dispatch(CounterLikeAC(id,like))


}
/*    const crateTitle = (title:string,id:string) => {
        dispatch(createtitleReducerAC(title,id))
    }*/

return (


        <div className="row">

            <Header/>
            <div className={'containerApp'}>
           {/*     <SideBar/>*/}
                <Routes>

                    <Route path={'/MySocialPage/'} element={<Main  deletePost={deletePost} addNewPost={addNewPost}
                                                     Counter={Counter}/>}/>
                    {/*MySocialPage/*/}
                    <Route path={'/dialogs'} element={<Dialogs/>} />
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/sittings'} element={<Sittings/>}/>
                    <Route path={'/CreateProfile'} element={<CreateProfile/> }/>
                </Routes>
            </div>
            <Footer/>
        </div>


);
}

export default App;
