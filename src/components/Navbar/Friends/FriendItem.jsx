import React from "react";


const FriendItem = (props) => {

    return <div>
        <div> {props.name} </div>
        <img src={props.avatar}/>
    </div>
}


export default FriendItem;