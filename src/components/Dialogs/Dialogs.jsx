import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d =>
            <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);

    let messagesElement = props.state.messages
        .map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <NewMessage />
            </div>
        </div>
    )
}
export default Dialogs;