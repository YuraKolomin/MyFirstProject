import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
<<<<<<< HEAD
import Preloader from "../../Common/Preloader/Preloader";
import {Link} from "react-router-dom";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post image={p.image} message={p.message} likesCount={p.likesCount} key={p.id}/>)
    let onAddPost = () => {
        props.addPost();
=======
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let addPost = () => {
        props.dispatch(addPostActionCreator());
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
    }
    let newPostElement = React.createRef();
    let onPostChange = () => {
        let newText = newPostElement.current.value;
<<<<<<< HEAD
        props.updateNewPostText(newText);
=======
        let action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
    };
 if (!props.profile) {
     return <Preloader />
 }


    return <div className={s.content}>
        <div className={s.postsBlock}>
            <div>
                <img className={s.backgroundImage} src={props.mainBackground} alt='' />
            </div>
            <div className={s.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <img src={props.profile.photos.small} alt=''/>
                <div><Link target="_blank" to={`https://${props.profile.contacts.github}`}>GitHub</Link></div>
                <div><Link target="_blank" to={`https://${props.profile.contacts.vk}`}>VK</Link></div>
                <div><Link target="_blank" to={`https://${props.profile.contacts.facebook}`}>Facebook</Link></div>
                <div><Link target="_blank" to={`https://${props.profile.contacts.instagram}`}>Instagram</Link></div>
                <div><Link target="_blank" to={`https://${props.profile.contacts.twitter}`}>Twitter</Link></div>
                <div><Link target="_blank" to={`https://${props.profile.contacts.youtube}`}>Youtube</Link></div>
                <div><Link target="_blank" to={`https://${props.profile.contacts.mainLink}`}>MainLink</Link></div>
            </div>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>;
}
export default MyPosts;