import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
      <header className={classes.header}>
        <img src="https://avatars.mds.yandex.net/i?id=11ab1bd7972e70aaef3790a519e60886ad31fc33-7716203-images-thumbs&n=13" alt="logo" />
    </header>
    ) 
}

export default Header
