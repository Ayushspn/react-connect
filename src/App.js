import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpLogin from './pages/signUpLogin/signUpLogin';
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Feed from './pages/Feed/Feed';
import Profile from './pages/Profile/Profile';
import Friends from './pages/Friends/Friends';
import './App.css';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
function App({loggedInUser}) {
  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
      <Route path ='/login'   component ={Login} />
      <Route path ='/forget-password'  component ={ForgetPassword} />
      {loggedInUser ?
      <>
      <Route path ='/forget-password'  component ={ForgetPassword} />
      <Route path ='/feed'  component ={Feed} />
      <Route path ='/profile'  component ={Profile} />
      <Route path ='/find-friends'  component ={Friends} />
      <Route path ='/' exact component ={SignUpLogin} />
      </>
      :<Redirect to ='/login'/>
      }
      </Switch>
    </React.Fragment>
  );
}

const mapStateToProps = ({ user: { loggedInUser } }) => {
  return {
      loggedInUser
  }
}

export default connect(mapStateToProps)(App);
