import React from 'react';
import MyPostsContainer from "./MyPosts/ProfileInfo/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <MyPostsContainer store={props.store} profile={props.profile}/>
    </div>;
}
export default Profile;