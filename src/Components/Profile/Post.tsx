import React, {useState} from 'react';
import style from "./Main.module.css";
import ava from "../../image/avatar.jpg";

type PostType = {
    post: Array<PostsType>
    deletePost: (id: string) => void
    Counter:(id :string, like:number)=>void
   
}

type PostsType = {
    id: string
    text: string
    like: number
}


const Post = (props: PostType) => {

    return (
        <div>


            <div>
                {props.post.map((e) => {


                    const deletePostHandler = () => {
                        props.deletePost(e.id)
                    }
                    const CounterHandler = () => {
                        props.Counter(e.id,e.like)
                    }

                    return (
                        <div key={e.id}>
                            <div>
                                <div><img className={style.avatar} src={ava} alt='avatar'/></div>
                                {e.text}
                                <button onClick={deletePostHandler}>x</button>

                            </div>

                            <button onClick={CounterHandler}> like {e.like}</button>


                        </div>
                    )
                })
                })
            </div>

        </div>
    );
};

export default Post;