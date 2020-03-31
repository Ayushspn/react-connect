import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
const Header = () => {
    return (<div className = {classes.headerContainer}>
        <Link to ='/'>Home</Link>
        <div>
        <Link to ='/aboutUs'>About Us</Link>
        <Link to ='/login'>Login</Link>
        </div>
    </div>)
}

export default Header;