import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import {connect} from 'react-redux';
const Header = ({loggedInUser}) => {
    let path = '/';
    if(loggedInUser){
        path = '/feed';
    }
    return (<div className = {classes.headerContainer}>
        <Link to ={path}>Home</Link>
        <div>
        <Link to ='/aboutUs'>About Us</Link>
        {!loggedInUser ? <Link to ='/login'>Login</Link> : <Link to ='/profile'>Profile</Link> }
        </div>
    </div>)
}

const mapStateToProps = ({user : { loggedInUser}}) => {
    return {
        loggedInUser
    }
}


export default connect(mapStateToProps)(Header);