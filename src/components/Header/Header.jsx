import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header className={s.header}>
        <img src="https://avatars.mds.yandex.net/i?id=11ab1bd7972e70aaef3790a519e60886ad31fc33-7716203-images-thumbs&n=13" alt="logo" />
        <div className={s.loginBlock}>
          {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
    ) 
}

export default Header
