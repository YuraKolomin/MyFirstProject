import React from 'react';
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";
import ProfileStatus from "./MyPosts/ProfileInfo/ProfileStatus";

const Profile = (props) => {
    return <div>
        <ProfileStatus status={"Hello!"}/>
        <MyPostsContainer store={props.store} profile={props.profile}/>
    </div>;
}
export default Profile;