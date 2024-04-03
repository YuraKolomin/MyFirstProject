import React from 'react';
<<<<<<< HEAD
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <MyPostsContainer store={props.store} profile={props.profile}/>
=======
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo mainBackground={props.profilePage.mainBackground}/>
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}/>
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
    </div>;
}
export default Profile;