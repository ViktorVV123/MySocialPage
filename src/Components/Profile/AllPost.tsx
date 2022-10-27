import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

import {useAppSelector} from "../../hook/PostsTypeSelector";
import Post from "./Post";
import {useDispatch} from "react-redux";
import {AddPostAC} from "../../store/Reducer/postReducer";
import {Button} from "@mui/material";
import style from './Textaria.module.css'



type AllPostType = {

    deletePost: (id: string) => void
    addNewPost:(text:string)=>void
    Counter:(id :string, like:number)=>void
}

export const AllPost= (props: AllPostType) => {

    const {posts} = useAppSelector(state => state.post);
    const dispatch = useDispatch();

  /*  const state = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)*/
    let [addPost, setAddPost] = useState('')
    const addPostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddPost(event.currentTarget.value)
    }

    const addNewPostHandler = () => {
     /*   dispatch(AddPostAC(addPost,10));*/
        if (addPost.trim()!==''){
        props.addNewPost(addPost)}
        setAddPost('')
    }
    const onKeyDownHandler = (event:KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key==='Enter'){
            addNewPostHandler()
        }
    }

    return (
        <div >
            <div className={style.post}>
                <div className={style.textariaButton} >

                   <div><textarea  placeholder='Add your new post' required className={style.textaria}
                        onKeyDown={onKeyDownHandler}
                        value={addPost}
                        onChange={addPostHandler}/>
                   </div>
                    <button className={style.green} onClick={addNewPostHandler} >
                        send
                    </button>
                </div>

                </div>

            <Post post={posts} deletePost={props.deletePost} Counter={props.Counter} />
            </div>

    );
};

export default AllPost;