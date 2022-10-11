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

    let [post, setPost] = useState(
        [
        {id: v1(), text: 'hello people', like: 23},
            {id: v1(), text: 'hello a go walking', like: 2},
            {id: v1(), text: 'what happen', like: 5},
            {id: v1(), text: 'my new page, i want my block and send picture in my live', like: 0}
        ])

    const deletePost = (id:string) => {
        setPost(post.filter(e=>e.id !== id))
    }
    const addNewPost = (text:string) => {
        let newPost={id:v1(),text:text,like:0}
        setPost([newPost,...post])
    }
const Counter = (id :string, like:number)=>{
    setPost(post.map(e => e.id === id ? { ...e, like:like + 1}:e))

}
return (

    <BrowserRouter>
        <Header/>

        <Routes>
            <Route path={'/MySocialPage'} element={<Main post={post} deletePost={deletePost} addNewPost={addNewPost} Counter={Counter} />}/>
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
