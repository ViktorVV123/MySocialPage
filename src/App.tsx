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

type store = {
    dialog: Array<DialogType>
    post: Array<PostType>
}

type DialogType = {
    id: string
    message: string
    name: string
}

type PostType = {
    id: string
    text: string
    like: string
}


function App() {
    const {posts} = useAppSelector(state => state.post);
    const dispatch = useDispatch();


    let [name, setName] = useState([

        {id:v1(),name:'Dima'},
        {id:v1(),name:'Andrey'},
        {id:v1(),name:'Nikita'},
        {id:v1(),name:'Igor'},
    ]);


    let [dialog, setDialogs] = useState([

        {id:v1(), message:'Hello Viktor'},
        {id:v1(), message:'How are you bro'},
        {id:v1(), message:'Are you go to walking?'},
        {id:v1(), message:'Nice to meet you my dear friends'},
    ]);


    const deletePost = (id:string) => {
        dispatch(DeletePostAC(id))

    }


    const addNewPost = (text:string) => {
        dispatch(AddPostAC(text,0));

    }
const Counter = (id :string, like:number)=>{
        dispatch(CounterLikeAC(id,like))
/*    setPost(post.map(e => e.id === id ? { ...e, like:like + 1}:e))*/

}
return (

    <BrowserRouter>
        <Header/>

        <Routes>
            <Route path={'/MySocialPage/'} element={<Main post={posts} deletePost={deletePost} addNewPost={addNewPost} Counter={Counter} />}/>
            <Route path={'/dialogs'} element={<Dialogs dialog={dialog} name={name}/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/music'} element={<Music/>}/>
            <Route path={'/sittings'} element={<Sittings/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>

);
}

export default App;
