import React, {useState} from 'react';
import style from './Post.module.css'
import ava from "../../../image/avatar.jpg";
import IconButton from '@mui/material/IconButton';
import DeleteIcon, {Bookmark, BookmarkBorder, Delete, Favorite, FavoriteBorder} from '@mui/icons-material';


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


            <div className={style.mapPost}>
                {props.post.map((e) => {


                    const deletePostHandler = () => {
                        props.deletePost(e.id)
                    }
                    const CounterHandler = () => {
                        props.Counter(e.id, e.like)
                    }

                    return (
                        <div key={e.id} className={style.mapPost}>
                            <div className={style.all}>
                            <div >
                                <div style={{display:'flex', justifyContent:'column', margin:'10px' }}>
                                <div><img className={style.avatar} src={ava} alt='avatar'/></div>
                                <div style={{margin:'8px',fontWeight: 'bold'}}>Виктор Власюк</div>
                                </div>
                                <div className={style.textPost}>  {e.text}</div>
                            </div>
                            <div style={{display:"flex",justifyContent:'space-between', margin:'10px'}}>
                                <div>
                                    <button onClick={CounterHandler}>{e.like}</button>
                                </div>
                                <div><IconButton style={{margin: 5}} onClick={deletePostHandler}>
                                    <Delete/>
                                </IconButton></div>
                            </div>
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

