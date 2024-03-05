import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPostElement = React.createRef();
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);
    };


    return <div className={s.content}>

        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    </div>;
}

export default MyPosts;