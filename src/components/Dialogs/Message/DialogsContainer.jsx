import React from "react";
import Dialogs from "../Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs_reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
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
export default compose(
    connect(mapStateToProps, mapDispatchToPros),
    withAuthRedirect
) (Dialogs);