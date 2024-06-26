import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return <header className={s.header}>
        <img
            src='https://e7.pngegg.com/pngimages/563/598/png-clipart-calico-cat-%E9%A6%99%E7%AE%B1%E5%BA%A7%E3%82%8A-illustrator-cat-white-face.png'
            alt=''/>
        <div className={s.loginBlock}>
            {isAuth
                ? <div className={s.loginBlockName}>{login} - <button onClick={logout}> Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;