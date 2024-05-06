import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 12,
            image: "https://sun9-41.userapi.com/impg/EH_PVceK9lE6RYuwGvLanv8T3HjocsLuqxN3OQ/1jM0bjJDzPE.jpg?size=1438x1600&quality=96&sign=bd8d217871be78455ab08254ed141d98&c_uniq_tag=DY-yYwj0B6RgU1H-_QrYh0_gY1ZOFw4GU1nlD33MTX4&type=album"
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 15,
            image: "https://narisyu.cdnbro.com/posts/552946-korgi-risunok-dlia-srisovki-1.jpg"
        },
    ],
    mainBackground: "https://gas-kvas.com/uploads/posts/2023-02/1675420044_gas-kvas-com-p-fonovii-risunok-les-5.jpg",
    newPostText: "You are aboba",
    newImage: "https://coolsen.ru/wp-content/uploads/2021/11/30-20211126_194915-1787x2048.png",
    profile: null,
    status: ""
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                image: state.newImage,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: newText
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const setUserProfileThunk = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId)
            dispatch(setUserProfile(response.data))
    }
}

export const getStatusThunk = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserStatus(userId)
            dispatch(setStatus(response.data))
    }
}

export const updateStatusThunk = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateUserStatus(status)
            if (response.data.resultCode === 0)
                dispatch(setStatus(status))
    }
}
export default profileReducer;