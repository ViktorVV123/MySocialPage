import React, {useState} from 'react';
import style from "./Main.module.css";
import ava from "../../image/avatar.jpg";
import IconButton from '@mui/material/IconButton';
import DeleteIcon, {Bookmark, BookmarkBorder, Delete, Favorite, FavoriteBorder} from '@mui/icons-material';
import {Checkbox} from "@mui/material";


type PostType = {
    post: Array<PostsType>
    deletePost: (id: string) => void
    Counter: (id: string, like: number) => void

}

type PostsType = {
    id: string
    text: string
    like: number
}


const Post = (props: PostType) => {

    return (
        <div className={style.post}>


            <div>
                {props.post.map((e) => {


                    const deletePostHandler = () => {
                        props.deletePost(e.id)
                    }
                    const CounterHandler = () => {
                        props.Counter(e.id, e.like)
                    }

                    return (
                        <div key={e.id}>
                            <div className={style.allPostColor}>
                                <div >
                                    <div><img className={style.avatar} src={ava} alt='avatar'/>
                                        <div style={{fontSize: '1rem', margin: 5}}>Виктор Власюк</div>

                                    </div>

                                    <div className={style.textPost}>  {e.text}</div>

                                </div>
                                <IconButton style={{margin: 5}} onClick={deletePostHandler}>
                                    <Delete/>
                                </IconButton>
                                <button onClick={CounterHandler}>{e.like}</button>

                            </div>

                        </div>
                    )
                })
                }
            </div>

        </div>
    );
};

export default Post;

