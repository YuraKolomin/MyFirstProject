import React from "react";


const NewMessage = (props) => {
    let addMessage = () => {
        let textMessage = newMessage.current.value;
        alert(textMessage)
    }
    let newMessage = React.createRef();
    return <div>
        <div>
            <textarea ref={newMessage}></textarea>
        </div>
        <div>
            <button onClick={addMessage}>New Message</button>
        </div>

    </div>
}


export default NewMessage;