import React from "react";
import Dialogs from "../Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs_reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchToPros = (dispatch) => {
    return {
        updateNewMessageText: (freshText) => {
            dispatch(updateNewMessageTextActionCreator(freshText))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToPros)(Dialogs);
export default DialogsContainer;