import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img
                src={props.image} alt=''/>
            {props.message}
            <div>
                <span>Likes {props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;