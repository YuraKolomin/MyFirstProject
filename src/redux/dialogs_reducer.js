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