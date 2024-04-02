import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile_reducer";
import {connect} from "react-redux";

let  mapStateToProps = (state) => {
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
        mainBackground:state.profilePage.mainBackground,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText) => {
            dispatch(updateNewPostTextActionCreator(newText))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;