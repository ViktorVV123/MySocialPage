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
import {v1} from "uuid";
import {useAppSelector} from "./hook/PostsTypeSelector";
import {useDispatch} from "react-redux";
import {AddPostAC, CounterLikeAC, DeletePostAC} from "./store/Reducer/postReducer";




function App() {
    const {posts} = useAppSelector(state => state.post);
    const dispatch = useDispatch();





    const deletePost = (id:string) => {
        dispatch(DeletePostAC(id))

    }


    const addNewPost = (text:string) => {
        dispatch(AddPostAC(text,0));

    }
const Counter = (id :string, like:number)=>{
        dispatch(CounterLikeAC(id,like))


}
return (

    <BrowserRouter>
        <Header/>

        <Routes>
            <Route path={'/'} element={<Main post={posts} deletePost={deletePost} addNewPost={addNewPost} Counter={Counter} />}/>
            <Route path={'/dialogs'} element={<Dialogs/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/sittings'} element={<Sittings/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>

);
}

export default App;
