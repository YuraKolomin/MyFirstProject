<<<<<<< HEAD

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Yura',
            avatar: 'https://avatars.mds.yandex.net/i?id=e0e78050202c066e733ca01a212da117cfffec8f-9869529-images-thumbs&n=13'
        },
        {
            id: 2,
            name: 'Nikita',
            avatar: 'https://avatars.mds.yandex.net/i?id=a4cf56ecc735c06b79ad30e117a5eaf2052bdf52-10414202-images-thumbs&n=13'
        },
        {
            id: 3,
            name: 'Sasha',
            avatar: 'https://avatars.mds.yandex.net/i?id=680df75f7d715be6d802fe902c3a3b32ce513a25-10806805-images-thumbs&n=13'
        },
        {
            id: 4,
            name: 'Roma',
            avatar: 'https://avatars.mds.yandex.net/i?id=e0f1b12314c314c364133d82e8770a4a2963b26f-4451358-images-thumbs&n=13'
        },
        {
            id: 5,
            name: 'Katya',
            avatar: 'https://avatars.mds.yandex.net/i?id=4b70586880fc9fd0e844aeed6668883fef33f280-12614240-images-thumbs&n=13'
        },
        {
            id: 6,
            name: 'Slava',
            avatar: 'https://avatars.mds.yandex.net/i?id=e7ae7a820eece9f65b1b10bb5c315d1f9cabd48e-10393597-images-thumbs&n=13'
        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yeah'}

    ],
    newMessageText: "Write something!"
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.freshText
            };
        }
=======
import state from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = (action.freshText);
            return state;
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return{
        type:ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (freshText) => {
    return{
        type:UPDATE_NEW_MESSAGE_TEXT, freshText: freshText
    }
}
export default dialogsReducer;