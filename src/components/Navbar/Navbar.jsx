import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <ul className={style.nav}>
          <li className={style.item}>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='#'>News</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='#'>Music</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='#'>Settings</NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/users'>Search users</NavLink>
          </li>
        </ul>
)}
export default Navbar;