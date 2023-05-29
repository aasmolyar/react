import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className={s.nav}>

    <div className={s.item}>
      <NavLink  className={({isActive}) => (isActive ? s.active : s.item)} to="/profile" end>Profile</NavLink>
    </div>

    <div className={s.item}>
      <NavLink  className={({isActive}) => (isActive ? s.active : s.item)} to="/dialogs" end>Messages</NavLink>
    </div>

    <div className={s.item}>
      <NavLink  className={({isActive}) => (isActive ? s.active : s.item)} to="/news" end>News</NavLink>
    </div>

    <div className={s.item}>
      <NavLink  className={({isActive}) => (isActive ? s.active : s.item)} to="/music" end>Music</NavLink>
    </div>

    <div className={s.item}>
      <NavLink  className={({isActive}) => (isActive ? s.active : s.item)} to="/settings" end>Settings</NavLink>
    </div>
    
  </nav>
    ) 
}

export default Navbar
