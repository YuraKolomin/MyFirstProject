import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Preloader from "../../Common/Preloader/Preloader";
import {Link} from "react-router-dom";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post image={p.image} message={p.message} likesCount={p.likesCount} key={p.id}/>)
    let onAddPost = () => {
        props.addPost();
    }
    let newPostElement = React.createRef();
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);
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