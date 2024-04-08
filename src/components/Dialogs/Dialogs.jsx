import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(d =>
            <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);

    let messagesElement = props.messages
        .map((m, index) => <Message key={index} message={m.message}/>)

    let onAddMessage = () => {
        props.addMessage();
    }
    let newMessageElement = React.createRef();
    let onMessageChange = () => {
        let freshText = newMessageElement.current.value;
        props.updateNewMessageText(freshText);
    }

    if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>New Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;