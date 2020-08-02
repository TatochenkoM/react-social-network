import React from 'react';
import Navbar from '../Navbar/Navbar'
import style from './Header.module.css'
import logo from '../../images/yelp.svg'
import { NavLink } from 'react-router-dom';



const Header = (props) => {
    return (
    <header className={style.header}>
        <div className={style.logo}> 
          <img src={logo} alt='logo'/>
        </div>
        <div className={style.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
        <Navbar/>
    </header> 
)}
export default Header;