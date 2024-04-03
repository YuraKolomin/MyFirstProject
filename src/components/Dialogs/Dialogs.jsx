import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
<<<<<<< HEAD
=======
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";


>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(d =>
            <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);

<<<<<<< HEAD
    let messagesElement = props.messages
        .map((m, index) => <Message key={index} message={m.message}/>)

    let onAddMessage = () => {
        props.addMessage();
=======
    let messagesElement = props.state.messages
        .map((m,index) => <Message key={index} message={m.message}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
    }
    let newMessageElement = React.createRef();
    let onMessageChange = () => {
        let freshText = newMessageElement.current.value;
<<<<<<< HEAD
        props.updateNewMessageText(freshText);
=======
        let action = updateNewMessageTextActionCreator(freshText)
        props.dispatch(action);
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
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
<<<<<<< HEAD
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>New Message</button>
=======
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>New Message</button>
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
                </div>
            </div>
        </div>
    )
}
export default Dialogs;