import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";



const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d =>
            <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);

    let messagesElement = props.state.messages
        .map((m,index) => <Message key={index} message={m.message}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let newMessageElement = React.createRef();
    let onMessageChange = () => {
        let freshText = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(freshText)
        props.dispatch(action);
    }

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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>New Message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;