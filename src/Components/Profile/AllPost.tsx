import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "./Main.module.css";
import {useAppSelector} from "../../hook/PostsTypeSelector";
import Post from "./Post";
import {useDispatch} from "react-redux";
import {AddPostAC} from "../../store/Reducer/postReducer";
import {Button} from "@mui/material";



type AllPostType = {
    post: Array<PostType>
    deletePost: (id: string) => void
    addNewPost:(text:string)=>void
    Counter:(id :string, like:number)=>void

}
type PostType = {
    id: string
    text: string
    like: number
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

                   <div><textarea  className={style.textaria}
                        onKeyDown={onKeyDownHandler}
                        value={addPost}
                        onChange={addPostHandler}/>
                   </div>
                    <button className={style.button} onClick={addNewPostHandler} >
                        send
                    </button>
                </div>
                <Post post={posts} deletePost={props.deletePost} Counter={props.Counter} />
                </div>


            </div>

    );
};

export default AllPost;