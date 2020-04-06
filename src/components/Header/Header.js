import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { defaultAuth } from '../../firebase';
import { onLoggedInUser } from '../../redux/userdetails/user.action.creator';
const Header = ({ loggedInUser, history, userLoggedIn }) => {
    let path = '/';
    if (loggedInUser) {
        path = '/feed';
    }
    const linkstyle = {
        'color': 'white',
        'textDecoration': 'none',
        'fontSize': '22px',
        'marginLeft': '15px'
    }

    const logOutUser = () => {
        defaultAuth
            .signOut().then((res) => {
                localStorage.removeItem('userDeatailsObj');
                localStorage.removeItem('userProfile');
                userLoggedIn('')
                history.replace('/login');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const loggedLink = (
        <>
            <Link to='/find-friends' style={linkstyle}>Find friends</Link>
            <Link to='/profile' style={linkstyle}>Profile</Link>
            <Link onClick={(event) => logOutUser(event)} style={linkstyle}>Log Out</Link>
        </>
    )
    return (<div className={classes.headerContainer}>
        <Link to={path} style={linkstyle} >React Connect</Link>
        <div>

            {!loggedInUser ? <Link to='/login' style={linkstyle}>Login</Link> : loggedLink}
            {/* <Link to ='/aboutUs' style = {linkstyle}>About Us</Link> */}
        </div>
    </div>)
}

const mapStateToProps = ({ user: { loggedInUser } }) => {
    return {
        loggedInUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoggedIn: (userId) => dispatch(onLoggedInUser(userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));