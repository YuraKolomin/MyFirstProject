import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {
    return <nav className={s.nav}>
        <div >
            <NavLink to="/Profile" className={navData=>navData.isActive ? s.active:s.item}> Profile</NavLink>
        </div>
        <div >
            <NavLink to="/Dialogs"  className={navData=>navData.isActive ? s.active:s.item}>Message</NavLink>
        </div>
        <div>
            <NavLink to="/News" className={navData=>navData.isActive ? s.active:s.item}>News</NavLink>
        </div>
        <div >
            <NavLink to="/Music" className={navData=>navData.isActive ? s.active:s.item}>Music</NavLink>
        </div>
        <div >
            <NavLink to="/Settings" className={navData=>navData.isActive ? s.active:s.item}>Settings</NavLink>
        </div>
        <div>
            <Friends friends={props.sidebar.friends}/>
        <div>

        </div>
        </div>

    </nav>;
}

export default Navbar;