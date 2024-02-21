import React from "react";
import s from './Friend.module.css'


const FriendItem = (props) => {

    return <div>
        <div> {props.name} </div>
        <img src={props.avatar}/>
    </div>
}


export default FriendItem;