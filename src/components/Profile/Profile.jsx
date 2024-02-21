import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";



const Profile = (props) => {
    return <div>
        <ProfileInfo mainBackground={props.profilePage.mainBackground}/>
        <MyPosts
            posts={props.profilePage.posts}
            addPost={props.addPost}
            newPostText={props.profilePage.newPostText}
            updateNewPostText={props.updateNewPostText}/>
    </div>;
}
export default Profile;