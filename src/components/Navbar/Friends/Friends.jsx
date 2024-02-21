import React from 'react';
import FriendItem from "./FriendItem";
import s from './Friend.module.css'


const Friends = (props) => {
    let friend = props.friends
        .map(f =>
            <FriendItem name={f.name} avatar={f.avatar}/>);
    return (
        <div>
            <div className={s.blockName}>
                Friends
            </div>
            <div className={s.friend}>
                {friend}
            </div>
        </div>
    )
}

export default Friends;