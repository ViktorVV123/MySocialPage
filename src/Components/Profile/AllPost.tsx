import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import style from "./Main.module.css";
import Post from "./Post";


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

const AllPost = (props: AllPostType) => {

    let [addPost, setAddPost] = useState('')
    const addPostHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddPost(event.currentTarget.value)
    }

    const addNewPostHandler = () => {
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
        <div>
            <div className={style.post}>
                <div>
                    <textarea
                        onKeyDown={onKeyDownHandler}
                        value={addPost}
                        onChange={addPostHandler}/>
                    <button onClick={addNewPostHandler}>add post</button>

                    </div>
                <Post post={props.post} deletePost={props.deletePost} Counter={props.Counter} />
                </div>


            </div>

    );
};

export default AllPost;